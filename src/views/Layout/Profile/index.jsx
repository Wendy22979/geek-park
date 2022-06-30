import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import styles from './index.module.scss'
import { getUser } from "@/store/actions/Profile"
import { removeToken } from "@/utils/login_localStorage"
import { Toast } from 'antd-mobile'
// icon图标
import {
  ContentOutline,
  BellOutline,
  HeartOutline,
  TeamOutline,
  RightOutline,
  UpCircleOutline,
  QuestionCircleOutline,
  PhoneFill
} from 'antd-mobile-icons'

import { Button, Modal } from 'antd-mobile'


const Profile = () => {
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.profile.userInfo)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const logout = () => {
    Modal.confirm({
      content: '是否退出登录？',
      onConfirm: () => {
        // 跳转到登录页面
        navigator("/login")
        // 删除token信息
        removeToken()
        // 提示
        Toast.show('已退出登录')
      },
      onCancel: () => {
        Toast.show('已取消')
      }
    })

  }
  return (
    <div className={styles.root}>
      <div className="profile">
        {/* 顶部个人信息区域 */}
        <div className="user-info">
          <div className="avatar">
            <img src={userInfo.photo} alt="!" />
          </div>
          <div className="user-name">{userInfo.name}</div>
          <Link to="/profile/edit">
            <span style={{ marginRight: 5 + 'px' }}>个人信息</span>
            <RightOutline />
          </Link>
        </div>

        {/* 今日阅读区域 */}
        <div className="read-info">
          <ContentOutline />
          今日阅读 <span>10</span> 分钟
        </div>

        {/* 统计信息区域 */}
        <div className="count-list">
          <div className="count-item">
            <p>{userInfo.art_count}</p>
            <p>动态</p>
          </div>
          <div className="count-item">
            <p>{userInfo.follow_count}</p>
            <p>关注</p>
          </div>
          <div className="count-item">
            <p>{userInfo.fans_count}</p>
            <p>粉丝</p>
          </div>
          <div className="count-item">
            <p>{userInfo.like_count}</p>
            <p>被赞</p>
          </div>
        </div>
        {/* 消息通知 */}
        <div className="count-list count-bottom">
          <div className="count-item">
            <BellOutline />
            <p>消息通知</p>
          </div>
          <div className="count-item">
            <HeartOutline />
            <p>收藏</p>
          </div>
          <div className="count-item">
            <UpCircleOutline />
            <p>浏览历史</p>
          </div>
          <div className="count-item">
            <TeamOutline />
            <p>我的作品</p>
          </div>
        </div>
        {/* 更多 */}
        <div className=" count-more">
          <h3>更多服务</h3>
          <div className='count-more-list'>
            <div className="count-item">
              <QuestionCircleOutline />
              <p>用户反馈</p>
            </div>
            <div className="count-item">
              <PhoneFill color="orange" />
              <p>小智同学</p>
            </div>
          </div>
        </div>

        {/* 退出区域 */}

        <div className='logout'>
          <Button block color='primary' size='large' onClick={logout}>
            退出登录
          </Button>
        </div>



      </div>
    </div>
  )
}

export default Profile
