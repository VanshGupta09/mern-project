import { FaPlus } from "react-icons/fa";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
}

const server = "kbkbbdjbj";

const ProductCard = ({ productId, photo, price, name, stock, handler }: ProductProps) => {
  return (
    <div className="product-card">
      {/* <img src={`${server}/${photo}`} alt="name" /> */}
      <img src={photo} alt="name" />
      <p>{name}</p>
      <span>₹{price}</span>
      <div onClick={() => { handler() }}>
        <button><FaPlus /></button>
      </div>
    </div>)
}

export default ProductCard