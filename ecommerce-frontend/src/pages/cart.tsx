import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [{
  productId: "bvskfjhvjshvb",
  photo: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY327_FMwebp_QL65_.jpg",
  name: "macbook",
  price: 4000,
  stock: 10,
  quantity: 4
}];
const subTotal = 4000;
const tax = Math.floor(subTotal * .18);
const shippingCharges = 200;
const discount = 400;
const total = subTotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isCouponCodeValid, setIsCouponCodeValid] = useState<boolean>(false);

  useEffect(() => {

    const timeOutId = setTimeout(() => {
      if (Math.random() > .5) setIsCouponCodeValid(true);
      else setIsCouponCodeValid(false);
    }, 1000)

    return () => {
      clearTimeout(timeOutId);
      setIsCouponCodeValid(false);
    }
  }, [couponCode])

  return (
    <div className="cart">
      <main>
        {
          cartItems.length > 0
            ?
            cartItems.map((elm, ind) => {
              return <CartItem key={ind} cartItem={elm} />
            })
            :
            <h1>No Items Added</h1>
        }
      </main>
      <aside>
        <p>Subtotal: {subTotal}</p>
        <p>Tax: {tax}</p>
        <p>Shipping Charges: {subTotal}</p>
        <p>Discount: <em className="red"> - ₹{discount}</em></p>
        <p><b>Total: {total}</b></p>
        <input type="text" placeholder="Coupon Code" value={couponCode} onChange={(e) => { setCouponCode(e.target.value) }} />
        {
          couponCode && (isCouponCodeValid
            ?
            <span className="green">₹{discount} off using <code>{couponCode}</code></span>
            :
            <span className="red"><VscError /> Invalid Coupon</span>
          )
        }
        {
          cartItems.length > 0 && <Link to={"/shipping"}>Checkout</Link>
        }
      </aside>
    </div>
  )
}

export default Cart