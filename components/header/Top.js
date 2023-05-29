import styles from "./styles.module.scss";
import Link from 'next/link'
import {MdSecurity} from 'react-icons/md'
import {BsSuitHeart} from 'react-icons/bs'
import {RiAccountPinCircleLine, RiArrowDropDownFill} from 'react-icons/ri'
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Top({country}) {

  const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img src={country.flag} alt="" srcset="" />
          <span>{country.name} / usd</span>
          </li>
          <li className={styles.li}>
            <MdSecurity/>
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart/>
            <Link href="/profile/wishlist">
              <span>Wish List</span>
            </Link>
          </li>
          <li 
            className={styles.li} 
            onClick={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
          {
            loggedIn ? (
              <li className={styles.li}>
              <div className={styles.flex}>
                <img src="https://mystickermania.com/cdn/stickers/cartoons/sticker_5064-230x230.png?t=09102020" alt="" />
                <span>Lee Roy</span>
                <RiArrowDropDownFill/>
              </div>
            </li>
            ) : (
              <li className={styles.li}>
              <div className={styles.flex}>
                <RiAccountPinCircleLine/>
                <span>Account</span>
                <RiArrowDropDownFill/>
              </div>
            </li>
            )}
             {visible && <UserMenu loggedIn={loggedIn}/>}
          </li>
        </ul>
      </div>
    </div>
  )
}
