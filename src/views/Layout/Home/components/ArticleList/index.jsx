
import styles from './index.module.scss'
import ArticleItem from "../ArticleItem/index"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getContentList } from "@/store/actions/home"

/**
 * 文章列表组件
 * props.channelId 当前文章列表所对应的频道ID
 * props.active 当前 Tab 栏选中的频道ID
 */
const ArticleList = ({ channelId, active }) => {
  let dispatch = useDispatch()
  let [list, setList] = useState([])
  useEffect(() => {
    const load = async () => {
      if (channelId === active) {
        let content = await dispatch(getContentList(channelId))
        setList((data) => {
          return content
        })
      }
    }

    load()

  }, [channelId, active])

  // const content = () => {
  //   return list.map((item) => (
  //     <div className="article-item" key={item.art_id}>
  //       <ArticleItem className="article-item" article={item}></ArticleItem>
  //     </div>
  //   ))

  // }

  return (
    <div className={styles.root}>
      <div className="articles">
        <div className="article-item">
          {/* {JSON.stringify(list) === "[]" ? "" : content()} */}
          {
            list.map((item) => (
              <div className="article-item" key={item.art_id}>
                <ArticleItem className="article-item" article={item}></ArticleItem>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ArticleList