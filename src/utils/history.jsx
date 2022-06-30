import { createBrowserHistory } from 'history'  //路由跳转工具引入

export const history = createBrowserHistory({
  basename: '',             //基链接
  forceRefresh: true   //路由跳转后强制刷新
}) //路由跳转方法实例化


export default history