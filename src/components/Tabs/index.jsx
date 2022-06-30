import { useEffect, useState, useRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './index.module.scss'
import React from 'react'

const Tabs = (props) => {
  let { active = 0, tabs = [], Content, onChange } = props
  /***
   * active当前点击tab的id
   * tabs tab列表
   * ArticleList tab对应的内容组件
   * onChange每个tab的点击事件，传对应的id
   */

  // 验证tabs是否传了
  if (!JSON.stringify(tabs) === "[]") {
    console.log("tabs未传")
  }
  const navRef = useRef()
  const lineRef = useRef()

  const [activeIndex, setActiveIndex] = useState(0) //当前点击的tabs的index值

  const changeTab = (index, id) => {
    setActiveIndex(index)
    onChange && onChange(id)
  }

  // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  // https://github.com/facebook/react/issues/14830
  // useEffect(() => {
  //   setActiveIndex(active)
  // }, [active])

  useEffect(() => {
    // TODO: 清理上一次的 animate

    const activeTab = navRef.current.children[activeIndex] //获取当前tab序号对应的子节点

    const activeTabWidth = activeTab.offsetWidth || 60 //当前tab的宽度

    // 注意：第一次获取 offsetLeft 值为 0 ，以后每次获取为 8
    //      所以，设置默认值 8，让所有情况下 offsetLeft 值都相同
    const activeOffsetLeft = activeTab.offsetLeft || 8   //每个tab距离浏览器左边的距离
    const tabWidth = navRef.current.offsetWidth || 289   //父盒子总宽度

    const to = activeOffsetLeft - (tabWidth - activeTabWidth) / 2
    // navRef.current.scrollLeft = to
    const from = navRef.current.scrollLeft
    const frames = Math.round((0.2 * 1000) / 16)  //步长
    let count = 0
    function animate () {
      navRef.current.scrollLeft += (to - from) / frames

      if (++count < frames) {
        requestAnimationFrame(animate)
      }
    }

    animate()

    // window.innerWidth / 375： 手动处理 JS 移动端适配
    // 说明：15 表示 Line 宽度的一半
    lineRef.current.style.transform = `translateX(${activeOffsetLeft + activeTabWidth / 2 - 15 * (window.innerWidth / 375)
      }px)`

    // 注意： 由于 tabs 数据是动态获取的，所以，为了能够在 tabs 数据加载完成后
    //       获取到 tab，所以，此处将 tabs 作为依赖项。
    //       否则，会导致 navRef.current.children[activeIndex] 拿到的是 line 而不是第一个tab
  }, [active, tabs])

  return (
    <div className={styles.root}>
      <div className="tabs">
        <div className="tabs-wrap">
          <div className="tabs-nav" ref={navRef}>
            {tabs.map((item, index) => (
              <div
                className={classnames('tab', item.id === active ? 'active' : '')}
                key={item.id}
                onClick={() => changeTab(index, item.id)}
              >
                <span>{item.name}</span>
              </div>
            ))}
            <div className="tab-line" ref={lineRef}></div>
          </div>
        </div>

        <div className="tabs-content">
          {
            tabs.map((item) => {
              return (
                <div
                  style={{
                    display: item.id === active ? "block" : "none"
                  }}
                  key={item.id}
                >
                  <Content
                    active={active}  //当前tab的下标
                    channelId={item.id} //文章对应的下标
                  />
                </div>
              )
            })}

          {/* {React.Children.map(children, (child, index) => {
            return (
              // 为每个子元素包裹一个 div，用来控制显示或隐藏
              <div
                className="tabs-content-wrap"
                style={{ display: index === activeIndex ? 'block' : 'none' }}
              >
                {
                  // 为每个子元素生成副本，并传入选中选项卡的 id 值
                  React.cloneElement(child, { aid: tabs[activeIndex]?.id || 0 })
                }
              </div>
            )
          })} */}
        </div>
      </div>
    </div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.array,
}

export default Tabs

