import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import classnames from 'classnames'

import styles from './style/index.module.scss'

export default function Layouts (props) {
  let { menus } = props
  let location = useLocation()
  let navigate = useNavigate()
  return (
    <div className={styles.tabbar}>
      {/* 区域二：按钮区域，会使用固定定位显示在页面底部 */}
      {menus.map((item) => {
        // 判断此路由是否是当前路由
        const selected = item.to === location.pathname
        return (
          <div
            className={classnames(
              styles["tabbar-item"],
              selected ? styles["tabbar-item-active"] : ''
            )}
            key={item.id}
            onClick={() => { navigate(item.to) }}
          >
            <item.icontype></item.icontype>
            <span>{item.title}</span>
          </div>
        )
      })}
    </div>
  )
}
