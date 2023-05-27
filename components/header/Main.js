import { RiSearch2Line } from 'react-icons/ri'
import { FaOpencart} from 'react-icons/fa'
import styles from './styles.module.scss'
import Link from "next/link"
import { useSelector } from 'react-redux'

export default function Main() {

    const { cart } = useSelector((state) => ({ ...state }));

  return (
    <div className={styles.main}>
        <div className={styles.main__container}>
            <Link href="/">
                    <img className={styles.logo} src="../../../logo.png" alt="" />
            </Link>
            <div className={styles.search}>
                <input type="text" placeholder='search' />
                <div className={styles.search__icon}>
                    <RiSearch2Line/>
                </div>
            </div>
            <Link href="/cart">
                <div className={styles.cart}>
                    <FaOpencart/>
                    <span> {cart.length}</span>
                </div> 
            </Link>
        </div>
    </div>
  )
}
