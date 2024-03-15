import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {
  const addToCart = () => { }

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">more</Link>
      </h1>
      <main>
        <ProductCard
          productId="qwertyui"
          photo="https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY327_FMwebp_QL65_.jpg"
          stock={75}
          price={3455}
          handler={addToCart}
          name="macbook" />
      </main>
    </div>)
}

export default Home