import { getToken } from "@/utils/login_localStorage"
//引入
import { applyMiddleware, createStore } from 'redux'
//  引入reducers
import rootReducer from './reducers'
// 引入异步处理工具
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//创建实例
const store = createStore(

  rootReducer,   // 参数一：根 reducer
  // 参数二：初始化时要加载的状态
  {
    login: getToken()
  },
  // 参数三：增强器
  composeWithDevTools(
    applyMiddleware(thunk)//异步处理器
  )
)


// 导出 Store 实例
export default store