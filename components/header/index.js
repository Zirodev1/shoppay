import Ad from "./Ad";
import styles from "./styles.module.scss";
import Top from "./Top";
import Main from "./Main";

export default function Header(){
  return <header className={styles.header}>
    <Ad />
    <Top />
    <Main/>
  </header>
}