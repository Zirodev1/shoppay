import Link from "next/link";
import styles from "./styles.module.scss";
import { signOut, signIn } from "next-auth/react";

export default function UserMenu({ session }) {
  return (

      <div className={styles.menu}>
        <h4>Welcome to shoppay</h4>
        {
            session ? (
            
            
            <div className={styles.flex}>
                <img src={session.user.image} alt="" className={styles.menu__img} />
                <div className={styles.col}>
                    <span>Welcome Back,</span>
                    <h3>{session.user.name}</h3>
                </div>
            </div>
            ) : (
             <div className={styles.flex}>
                <button className={styles.btn__primary}>Register</button>
                <button className={styles.btn__outlined} onClick={() => signIn()}>Sing In</button>
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
            session ? (<button className={styles.btn__outlined} onClick={() => signOut()}>Sing Out</button>) : ""
        }
        </div>
    );
}
