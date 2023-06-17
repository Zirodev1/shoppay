import Link from "next/link"
import Menu from "./menu"
import Offers from "./offers"
import styles from "./styles.module.scss"
import MainSwiper from "./swiper"
import User from "./user"


export default function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <ul>
                    <li>
                        <Link href=""></Link>
                    </li>
                </ul>
            </div>
            <Menu/>
            <MainSwiper />
            <Offers />
            <User/>
        </div>
    )
}

