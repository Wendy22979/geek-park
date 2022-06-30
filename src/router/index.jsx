import { useRoutes, Navigate } from "react-router-dom";
import React, { Suspense } from "react"



// 引入路由组件，一级路由
const Login = React.lazy(() => import('@views/Login/index'))
const Layout = React.lazy(() => import('../views/Layout/index'))
const Article = React.lazy(() => import('@/views/Article'))
const Search = React.lazy(() => import('@/views/Search'))
const NotFound = React.lazy(() => import("@/views/NotFound/index"))



// 二级路由
const Home = React.lazy(() => import('@/views/Layout/Home'))
const Profile = React.lazy(() => import('@/views/Layout/Profile'))
const Question = React.lazy(() => import('@/views/Layout/Question'))
const Video = React.lazy(() => import('@/views/Layout/Video'))

const lazyLoad = (children) => {
  return <Suspense fallback={<>loading</>}>{children}</Suspense>
}

const router = [
  {
    path: "/",
    element: <Navigate to="/layout" />,
    auth: true //为true则需要验证
  },
  {
    path: "/layout",
    element: <Layout />,
    auth: true,
    children: [
      {
        index: true, //默认路由
        element: lazyLoad(<Home />),
      },
      {
        path: 'profile',
        element: lazyLoad(<Profile />),
        auth: true
      },
      {
        path: 'question',
        element: lazyLoad(<Question />),
        auth: true
      },
      {
        path: 'video',
        element: lazyLoad(<Video />),
        auth: true
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
    auth: false
  },
  {
    path: '/article/:id',
    element: lazyLoad(<Article />),
    auth: false
  },
  {
    path: '/search',
    element: lazyLoad(<Search />),
    auth: false
  },
  {
    path: '*',
    element: <NotFound />,
    auth: false
  }

]
function Routes () {
  let element = useRoutes(router);

  return element;
}

// 路由守卫
// 根据浏览器地址栏的路径获取路由
/* 
   router 是所有的路由对象
   path 当前的路由地址
*/

// 通过筛选找到当前路由对应的路由信息，返回
const checkAuth = (router, path) => {
  for (const data of router) {
    if (data.path === path) return data
    if (data.children) {
      const res = checkAuth(data.children, path)
      if (res) return res
    }
  }
  return null
}


// 获取当前路由信息，主要是获取 auth属性
export const checkRouterAuth = (path) => {
  // 存储查找到的路由对象
  let authObj = null
  // router 获取的是全局的路由对象  18行定义的
  authObj = checkAuth(router, path)
  return authObj
}

export default Routes



