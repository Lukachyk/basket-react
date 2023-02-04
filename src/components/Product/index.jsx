import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss";
import priceFormatter from "../../utils/priceFormatter";

const Product = ({
  product,
  deletProduct,
  increase,
  decrease,
  changeValue,
}) => {
  const { img, title, priceTotal, count, id } = product;

  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/items/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count
          count={count}
          increase={increase}
          decrease={decrease}
          id={id}
          changeValue={changeValue}
        />
      </div>
      <div className="product__price">{priceFormatter(priceTotal)}$</div>
      <div className="product__controls">
        <ButtonDelete deletProduct={deletProduct} id={id} />
      </div>
    </section>
  );
};

export default Product;
