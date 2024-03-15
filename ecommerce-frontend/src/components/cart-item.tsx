import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

type cartItemProps = {
  cartItem: any;
}

const CartItem = ({ cartItem }: cartItemProps) => {
  const { productId, photo, price, name, quantity } = cartItem;
  return (
    <div className="cart-item">
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>
      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button><FaTrash /></button>
    </div>
  )
}

export default CartItem