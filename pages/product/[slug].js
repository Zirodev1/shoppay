import styles from "../../styles/product.module.scss";
import db from "@/utils/db";
import Product from "@/models/Product";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Category from "../../models/Category"
import SubCategory from "@/models/SubCategory";
import MainSwiper from "@/components/productPage/mainSwiper";
import { useState } from "react";
import Infos from "@/components/productPage/infos";

export default function product({ product }) {
    const [activeImg, setActiveImg] = useState();
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header country=""/>
      <div className={styles.product}>
        <div className={styles.container}>
            <div className={styles.path}>
                Home / {product.category.name} /
                {
                    product.subCategories.map((sub) => (
                        <span>{sub.name}</span>
                    ))
                }
            </div>
            <div className={styles.product__main}>
                <MainSwiper images={product.images} activeImg={activeImg}/>
                <Infos product={product} setActiveImg={setActiveImg}/>
            </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  const size = query.size || 0;
  db.connectDb();
  //---------------------------------------------------
  let product = await Product.findOne({ slug })
  .populate( {path: 'category', model: Category} )
  .populate({ path: "subCategories", model: SubCategory })
  .lean();
  let subProduct = product.subProducts[style];
  let prices = subProduct.sizes
    .map((s) => {
      return s.price;
    })
    .sort((a, b) => {
      return a - b;
    });

  let newProduct = {
    ...product,
    images: subProduct.images,
    sizes: subProduct.sizes,
    discount: subProduct.discount,
    sku: subProduct.sku,
    colors: product.subProducts.map((p) => {
      return p.color;
    }),
    priceRange: subProduct.discount
      ? `From ${(prices[0] - prices[0] / subProduct.discount).toFixed(2)} to ${(
          prices[prices.length - 1] -
          prices[prices.length - 1] / subProduct.discount
        ).toFixed(2)}$`
      : `From ${prices[0]} to ${prices[prices.length - 1]}$`,
    price:
      subProduct.discount > 0
        ? (
            subProduct.sizes[size].price -
            subProduct.sizes[size] / subProduct.discount
          ).toFixed(2)
        : subProduct.sizes[size].price,
    priceBefore: subProduct.sizes[size].price,
    quantity: subProduct.sizes[size].qty,
  };
  //----------------------------------------------------
  console.log("new product", newProduct);
  db.disconnectDb;
  return {
    props: {
      product: JSON.parse(JSON.stringify(newProduct)),
    },
  };
}
