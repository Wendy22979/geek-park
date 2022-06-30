// 顶部导航封装

// 样式引入
import "./style/header.scss"
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"

export default function NavBar (props) {
  let { title, extra } = props
  // 回退跳转
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  return (
    // 顶部导航栏
    <div className="root">
      {/* 后退按钮 */}
      <div className="left" >
        <LeftOutlined onClick={back} />
      </div>
      {/* 居中标题 */}
      <div className="title">
        {title ? title : ""}
      </div>

      {/* 右侧内容 */}
      <div className="right">
        {extra ? extra : ""}
      </div>
    </div>
  )
}