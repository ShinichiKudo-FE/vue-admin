import defaultSetting from '@/settings';

const title = defaultSetting.title || 'Vue Admin';

export default function getPageTitle(pageTitle){
    if(pageTitle){
        return `${pageTitle}-${title}`;
    }
    return `${title}`;
}