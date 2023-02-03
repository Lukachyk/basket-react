import Product from "../App/Product";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import data from "./../../data";
import React, { useState } from "react";
const Cart = () => {
  const [cart, setCart] = useState(data);

  const products = cart.map((product) => {
    return <Product key={product.id} product={product} />;
  });

  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter />
    </section>
  );
};

export default Cart;
