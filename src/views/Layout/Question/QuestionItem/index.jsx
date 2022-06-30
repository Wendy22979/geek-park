
import styles from "./index.module.scss"
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export default function QuestionItem (props) {
  let { title, endorse, comment, times } = props.list
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <h3>{title}</h3>
        <div className={styles.left_bottom}>
          <span>赞同  {endorse % 1000 === 0 ? endorse : Math.floor(endorse / 1000) * 1000 + "+"}</span>&nbsp;&nbsp;
          <span>评论 {comment % 100 === 0 ? endorse : Math.floor(comment / 100) * 100 + "+"}</span> &nbsp;&nbsp;
          <span>{dayjs().from(times)}</span>
        </div>
      </div>
      <div className={styles.right}>
        <img src="https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60" alt="" />
      </div>
    </div>
  )
}