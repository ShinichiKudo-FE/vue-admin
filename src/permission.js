import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' //顶部加载进度条插件
import 'nprogress/nprogress.css' // 样式文件

import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration 禁用

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
    NProgress.start();
    document.title = getPageTitle(to.meta.title);
    const hasToken = getToken();
    if (hasToken) {
        if (to.path === './login') {
            next({ path: '/' });
            NProgress.done();
        } else {
            // const hasRoles = store.getters.roles && store.getters.roles.length > 0;
            const hasRoles = true;
            if (hasRoles) {
                store.dispatch('permission/generateRoutes', ['admin']);
                next()
            } else {
                try {
                    // const { roles } = await store.dispatch('user/getInfo');
                    // const accessRoutes = await store.dispatch('permission/generateRoutes', roles);
                    const accessRoutes = await store.dispatch('permission/generateRoutes', ['admin']);
                    router.addRoutes(accessRoutes);
                    next({ ...to, replace: true });
                } catch (error) {
                    // await store.dispatch('user/resetToken')
                    Message.error(error || 'Has Error')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})
