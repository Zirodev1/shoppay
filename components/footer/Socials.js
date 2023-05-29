import { FaFacebook } from "react-icons/fa"
import styles from "./styles.module.scss"
import { BsInstagram, BsPinterest, BsSnapchat, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs"

export default function Socials() {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h3>STAY CONNECTED</h3>
        <ul>
          <li>
            <a href="">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="">
              <BsPinterest />
            </a>
          </li>
          <li>
            <a href="">
              <BsSnapchat/>
            </a>
          </li>
          <li>
            <a href="">
              <BsTiktok/>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
