import styles from "./index.module.scss"
import img1 from "@/assets/404_images/404.png"

export default function NotFound () {
  const message = () => {
    return 'The webmaster said that you can not enter this page...'
  }
  return (
    <div>
      <div className={styles['wscn-http404-container']}>
        <div className={styles['wscn-http404']}>
          <div className={styles['pic-404']}>
            <img className={styles['pic-404__parent']} src={img1} alt="404" />
            {/* <img className="pic-404__child left" src={img1} alt="404" />
            <img className="pic-404__child mid" src={img1} alt="404" />
            <img className="pic-404__child right" src={img1} alt="404" /> */}
          </div>
          <div className={styles['bullshit']}>
            <div className={styles["bullshit__oops"]}>OOPS!</div>
            <div className={styles['bullshit__info']}>All rights reserved
              <a style={{ color: '#20a0ff' }} href="https://wallstreetcn.com" target="_blank" rel="noreferrer">wallstreetcn</a>
            </div>
            <div className={styles['bullshit__headline']}>{message()}</div>
            <div className={styles['bullshit__info']}>Please check that the URL you entered is correct, or click the button below to return to the homepage.</div>
            <button className={styles['bullshit__return-home']}>Back to home</button>
          </div>
        </div>
      </div>
    </div>
  )
}