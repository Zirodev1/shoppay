import Link from "next/link";
import styles from "./styles.module.scss";

export default function UserMenu({ loggedIn }) {
  return (

      <div className={styles.menu}>
        <h4>Welcome to shoppay</h4>
        {
            loggedIn ? (
            
            
            <div className={styles.flex}>
                <img src="https://mystickermania.com/cdn/stickers/cartoons/sticker_5064-230x230.png?t=09102020" alt="" className={styles.menu__img} />
                <div className={styles.col}>
                    <span>Welcome Back,</span>
                    <h3>Lee Roy</h3>
                </div>
            </div>
            ) : (
             <div className={styles.flex}>
                <button className={styles.btn_primary}>Register</button>
                <button className={styles.btn_outlined}>Sing In</button>
             </div>
            )  
        }
        <ul>
            <li>
                <Link href='/profile'>Account</Link>
            </li>
            <li>
                <Link href='/profile/Orders'>Orders</Link>
            </li>
            <li>
                <Link href='/profile/messages'>Messages</Link>
            </li>
            <li>
                <Link href='/profile/addresses'>Address</Link>
            </li>
            <li>
                <Link href='profile/wishlist'>Wishlist</Link>
            </li>
            <li>
                <Link href='profile/settings'>Settings</Link>
            </li>

        </ul>
        {
            loggedIn ? (<button className={styles.btn_outlined}>Sing Out</button>) : ""
        }
        </div>
    );
}
