import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { checkRouterAuth } from "./index"
import { hasToken } from "@/utils/login_localStorage.jsx"
import { useEffect, useState } from "react"

// 前置路由守卫，替代路由出口，凡是要渲染的均需经过鉴权
const RouterBeforeEach = () => {
  // console.log("路由守卫")
  let [auth, setAuth] = useState(false) //用于最后输出是否放行，false为不放行，即无出口
  let { pathname } = useLocation() //获取当前路由
  let navigate = useNavigate()
  // // path为当前路由地址
  let authObj = checkRouterAuth(pathname)  //获取对应路由信息
  // // 判断token是否存在，存在就是登录状态
  let isToken = hasToken()

  useEffect(() => {
    // // 当路由需要鉴权，但是无token时，即token失效或者未登录
    if (authObj && authObj.auth && isToken === false) {
      console.log("更新页面前")
      setAuth(false)
      // 无token，跳转到登录页,开启替换模式
      navigate("/login", { replace: true })
      console.log("更新页面后")
    } else {
      setAuth(true) //放行
    }
  }, [])



  return (
    <span>
      {auth ? <Outlet /> : null}
    </span>
  )

}


export default RouterBeforeEach