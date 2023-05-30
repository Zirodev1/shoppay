import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "../components/header"
import Footer from "@/components/footer";
import axios from "axios"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home( {country} ) {
  const { data: session } = useSession();
  return (
    <div>
      <Header country={country}/>
      {session ? "you are logged in" : "you are not logged in"}
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
