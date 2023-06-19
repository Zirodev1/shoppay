import Link from "next/link";
import styles from "./styles.module.scss";
import { MdFlashOn } from "react-icons/md";

export default function FlashCard({ product }) {
    let discountedPrice = product.price - product.price / product.discount;
    let savedFromPrice = product.price - (product.price - product.price / product.discount)
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <Link href={product.link}>
            <img src={product.image} alt=""/>
        </Link>
        <div className={styles.flash}>
            <MdFlashOn/>
            <span> {product.discount}% off</span>
        </div>
      </div>
      <div className={styles.card__price}>
        <span>USD ${discountedPrice.toFixed(2)} </span> 

        <span>USD ${savedFromPrice.toFixed(2)}</span>
      </div>
      <div className={styles.card__bar}>
        <div className={styles.card__bar_inner} style={{ width: "75%"}}></div>
      </div>
      <div className={styles.card__percentage}>Sold {product.sold}</div>
    </div>
  );
}
