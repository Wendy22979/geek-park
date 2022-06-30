
import classnames from "classnames"
import styles from "./index.module.scss"
// import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export default function ArticleItem (props) {
  // console.log(props.article)
  let navigate = useNavigate()
  let { title, cover: { images, type }, aut_name, comm_count, pubdate, art_id } = props.article

  // 跳转详情页
  let details = () => {
    navigate(`/article/${art_id}`)
  }

  return (
    <div className={styles.root} onClick={details}>
      <div
        className={classnames(
          'article-content',
          type === 3 ? 't3' : '',
          type === 0 ? 'none-mt' : ''
        )}
      >
        <h3>{title}</h3>
        {type !== 0 && (
          <div className="article-imgs">
            {/* {JSON.stringify(images) !== '[]' ? list() : ""} */}
            {images.map((item, i) => (
              <div className="article-img-wrapper" key={i}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        )}
      </div>
      <span>{aut_name}</span>
      <span>{comm_count} 评论</span>
      <span>{dayjs().from(pubdate)}</span>

      <span className="close"></span>
    </div>
  )
}