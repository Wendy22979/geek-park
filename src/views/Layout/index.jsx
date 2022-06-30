import TabBar from "@c/TabBar/index.jsx"

import {
  HistogramOutline,
  QuestionCircleOutline,
  MovieOutline,
  UserCircleOutline,
} from 'antd-mobile-icons'

// 路由守卫
import RouterBeforeEach from "@/router/RouterBeforeEach"

export default function Layout () {
  //  底部导航栏数据
  const menus = [
    { id: 1, title: '首页', to: '/Layout', icontype: HistogramOutline },
    {
      id: 2,
      title: '问答',
      to: '/Layout/question',
      icontype: QuestionCircleOutline,
    },
    { id: 3, title: '视频', to: '/Layout/video', icontype: MovieOutline },
    { id: 4, title: '我的', to: '/Layout/profile', icontype: UserCircleOutline },
  ]

  return (
    <div style={{ height: 100 + "%" }}>
      <div className="tab-content">
        <RouterBeforeEach />
      </div>

      <TabBar menus={menus} />
    </div>
  )
}