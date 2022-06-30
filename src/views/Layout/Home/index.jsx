//首页
import React from 'react'
import styles from './index.module.scss'
import Tabs from '@/components/Tabs'
import { getUserChannels } from '@/store/actions/home'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchOutline, AppstoreOutline } from 'antd-mobile-icons'
import ArticleList from './components/ArticleList'
export default function Home () {
  let dispatch = useDispatch()
  // 获取频道
  useEffect(() => {
    dispatch(getUserChannels())
  }, [dispatch])
  let tabs = useSelector((state) => state.home.userChannels)

  // 当前选中的tab的下标  默认选中是第一个
  const [active, setActive] = useState(0)
  //点击tab栏，把下标赋值给active
  const changeActive = (ind) => {
    setActive(ind)
  }

  return (
    <div className={styles.root}>
      <Tabs
        tabs={tabs}
        Content={ArticleList}//tab对应的内容组件
        active={active}  //当前tab的下标
        onChange={changeActive} //点击事件
      >
      </Tabs>

      {/* 频道 Tab 栏右侧的两个图标按钮：搜索、频道管理 */}
      <div className="tabs-opration">
        <SearchOutline className="icon" />
        <AppstoreOutline className="icon" />
      </div>

    </div>
  )
}
