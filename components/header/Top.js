import styles from "./styles.module.scss";
import Link from 'next/link'
import {MdSecurity} from 'react-icons/md'
import {BsSuitHeart} from 'react-icons/bs'
import {RiAccountPinCircleLine, RiArrowDropDownFill} from 'react-icons/ri'
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Top() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img src="https://peteog.com/wp-content/uploads/2019/07/cropped-512px-United-states_flag_icon_round.svg_.png" alt="" srcset="" />
          <span>United States / usd</span>
          </li>
          <li>
            <MdSecurity/>
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart/>
            <Link href="/profile/wishlist">
              <span>Wish List</span>
            </Link>
          </li>
          <li>
          {
            loggedIn ? (
              <li>
              <div className={styles.flex}>
                <img src="https://mystickermania.com/cdn/stickers/cartoons/sticker_5064-230x230.png?t=09102020" alt="" />
                <span>Lee Roy</span>
                <RiArrowDropDownFill/>
              </div>
            </li>
            ) : (
              <li>
              <div className={styles.flex}>
                <RiAccountPinCircleLine/>
                <span>Account</span>
                <RiArrowDropDownFill/>
              </div>
            </li>
            )}
             <UserMenu loggedIn={loggedIn}/>
          </li>
        </ul>
      </div>
    </div>
  )
}
