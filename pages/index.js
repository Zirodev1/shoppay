import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "../components/header"
import Footer from "@/components/footer";
import axios from "axios"
import { useSession, signIn, signOut } from "next-auth/react"
import Main from "@/components/home/main"
import FlashDeals from "@/components/home/flashDeals";
import Category from "@/components/home/category";

export default function Home( {country} ) {
  const { data: session } = useSession();
  return (
    <div>
      <Header country={country}/>
      <div className={styles.home}>
        <div className={styles.container}>
          <Main/>
          <FlashDeals/>
          <div className={styles.home__category}>
          <Category header="Dressess"/>
          </div>
        </div>
      </div>
      <Footer country={country}/>
    </div>
  );
}

export async function getServerSideProps(){
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
      //country: {name: data.name, flag: data.flag.emojitwo},
      country: {name: "United States", flag: "https://peteog.com/wp-content/uploads/2019/07/cropped-512px-United-states_flag_icon_round.svg_.png"},
    },
  }
}
