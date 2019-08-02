const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const name = "vue Element Admin"
module.exports = {
    publicPath: './', //打包后的页面相对路径
    outputDir: 'dist', //
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development', // 在开发环境下进行eslint检查
    productionSourceMap: false,
    chainWebpack: (config) => {
        // 只有在打包页面才会自动生成分析界面
        if (process.env.NODE_ENV === 'production') {
            // if (process.env.npm_lifecycle_event === 'analyze'){
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
            // }
        }

    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
}