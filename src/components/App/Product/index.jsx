import ButtonDelete from "../../ButtonDelete";
import Count from "../../Count";
import "./style.scss";

const Product = () => {
  return (
    <section className="product">
      <div className="product__img">
        <img src="./img/items/Note.jpg" alt="Apple" />
      </div>
      <div className="product__title">Apple MacBook Air 13</div>
      <div className="product__count">
        <Count />
      </div>
      <div className="product__price">1100 $</div>
      <div className="product__controls">
        <ButtonDelete />
      </div>
    </section>
  );
};

export default Product;
