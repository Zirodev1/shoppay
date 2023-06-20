import { BsArrowRightCircle } from "react-icons/bs"
import styles from "./styles.module.scss"

export default function Category({header}) {
  return (
    <div className={styles.category}>
        <div className={styles.category__header}>
            <h1>{header}</h1>
            <BsArrowRightCircle/>
        </div>
    </div>
  )
}
