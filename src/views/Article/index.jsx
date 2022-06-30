// 详情
import NavBar from '@/components/NavBar'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './index.module.scss'
import { MoreOutline } from 'antd-mobile-icons'  //字体图标
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { getArticleInfo } from "@/store/actions/actions"
import DOMPurify from 'dompurify' //对引入内容做净化处理
// 代码高亮处理
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'

const Article = () => {
  let dispatch = useDispatch()
  let { id } = useParams() //获取路由传参
  let [article, setArticle] = useState({}) //详情数据存储
  // 初始化请求
  useEffect(() => {
    let load = async () => {
      let res = await dispatch(getArticleInfo(id))
      setArticle(res)
    }
    load()
  }, [id, dispatch])

  useEffect(() => {
    // 配置 highlight.js
    hljs.configure({
      // 忽略未经转义的 HTML 字符
      ignoreUnescapedHTML: true,
    })
    // 获取到内容中所有的code标签
    const codes = document.querySelectorAll('.dg-html code')
    codes.forEach((el) => {
      // 让code进行高亮
      hljs.highlightElement(el)
    })
  }, [])

  let {
    title,
    like_count,
    content,
    aut_photo,
    aut_name,
    pubdate,
    read_count,
    comm_count,
  } = article

  return (
    <div className={styles.root}>
      <div className="root-wrapper">
        {/* 顶部导航栏 */}
        <NavBar
          extra={
            <span>
              <MoreOutline />
            </span>
          }
        ></NavBar>

        <>
          <div className="wrapper">
            <div className="article-wrapper">
              {/* 文章描述信息栏 */}
              <div className="header">
                <h1 className="title">{title}</h1>

                <div className="info">
                  <span>{pubdate}</span>
                  <span>{read_count} 阅读</span>
                  <span>{comm_count} 评论</span>
                </div>

                <div className="author">
                  <img src={aut_photo} alt="" />
                  <span className="name">{aut_name}</span>
                  <span className="follow">关注</span>
                </div>
              </div>

              {/* 文章正文内容区域 */}
              <div className="content">
                <div className="content-html dg-html"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content || '') }}
                ></div>
                <div className="date">发布文章时间：{pubdate}</div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default Article
