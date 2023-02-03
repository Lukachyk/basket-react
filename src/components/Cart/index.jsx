import Product from "../App/Product";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";

const Cart = () => {
  return (
    <section className="cart">
      <CartHeader />
      <Product />
      <CartFooter />
    </section>
  );
};

export default Cart;
