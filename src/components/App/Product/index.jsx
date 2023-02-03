import ButtonDelete from "../../ButtonDelete";
import Count from "../../Count";
import "./style.scss";

const Product = ({ product }) => {
  return (
    <section className="product">
      <div className="product__img">
        <img src="./img/items/Note.jpg" alt="Apple" />
      </div>
      <div className="product__title">{product.title}</div>
      <div className="product__count">{/* <Count /> */}</div>
      <div className="product__price">{product.price} $</div>
      <div className="product__controls">
        <ButtonDelete />
      </div>
    </section>
  );
};

export default Product;
