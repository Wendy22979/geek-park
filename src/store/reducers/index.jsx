import { combineReducers } from 'redux'  //引入组合所有reducer的函数
// 引入模块
import login from "./login"
import profile from "./Profile"
import home from "./home"

//将所有reducer组合成一个
const rootReducer = combineReducers({
  login,
  profile,
  home

  // 在这里配置有所的 reducer ...

})

// 导出根 reducer
export default rootReducer