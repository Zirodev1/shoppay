import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "../components/header"
import Footer from "@/components/footer";
import axios from "axios"
import { useSession, signIn, signOut } from "next-auth/react"
import Main from "@/components/home/main"
import FlashDeals from "@/components/home/flashDeals";
import Category from "@/components/home/category";
import { homeImprovSwiper, women_accessories, women_dresses, women_shoes, women_swiper, gamingSwiper } from "@/data/home";
import { useMediaQuery } from "react-responsive";
import db from "../utils/db";
import ProductsSwiper from "@/components/productSwiper";
import Product from "@/models/Product";
import ProductCard from "@/components/productCard";

export default function Home( {country, products} ) {
  const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: "(max-width: 850px)"});
  return (
    <div>
      <Header country={country}/>
      <div className={styles.home}>
        <div className={styles.container}>
          <Main/>
          <FlashDeals/>
          <div className={styles.home__category}>
          <Category header="Dressess" products={women_dresses} background="#5a31f4"/>
          {
            !isMedium && 
            (
          <Category header="Shoes / High Heels" products={women_shoes} background="#3c811f"/>
            )
          }
          <Category header="Accessories" products={women_accessories} background="#000"/>
          </div>
          <ProductsSwiper products={women_swiper}/>
          <ProductsSwiper products={gamingSwiper} header="Gaming" bg="#2f82ff"/>
          <ProductsSwiper products={homeImprovSwiper} header="Home Imporvement" bg="#5a31f4"/>
          <div className={styles.products}>
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
      <Footer country={country}/>
    </div>
  );
}

export async function getServerSideProps(){
  db.connectDb();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
  console.log(products)
  // let data = await axios
  //   .get("https://api.ipregistry.co/?key=7wt77rfme96c68c4")
  //   .then((res) => {
  //     return res.data.location.country;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      //country: {name: data.name, flag: data.flag.emojitwo},
      country: {name: "United States", flag: "https://peteog.com/wp-content/uploads/2019/07/cropped-512px-United-states_flag_icon_round.svg_.png"},
    },
  }
}
