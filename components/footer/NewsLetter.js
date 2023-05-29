import Link from "next/link"
import styles from "./styles.module.scss"

export default function NewsLetter() {
  return (
    <div className={styles.footer__newsletter}>
        <h3>SIGN UP FOR OUR  NEWSLETTER</h3>
        <div className={styles.footer__flex}>
            <input type="text" placeholder="Enter Email Address" />
            <button className={styles.btn__primary}>SUBSCRIBE</button>
        </div>
        <p>
            By clicking the Subscribe button, you are agreeing to 
            <Link href=""> our Privacy & Cookie Policy</Link>
        </p>
    </div>
  )
}
