import Header from "../components/header"
import Footer from "../components/footer"

export default function signin({}) {
    const country = {
        name: "Morocco",
        flag: "https://cdn-icons-png.flaticon.com/512/197/197551.png?w=360",}
  return (
    <div>
        <Header />
        page itself
        <Footer country={country.name}/>
    </div>
  )
}
