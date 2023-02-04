import "./style.scss";

const Count = ({ count, increase, id, decrease, changeValue }) => {
  return (
    <div className="count">
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={count}
          onChange={(e) => {
            changeValue(id, +e.target.value);
          }}
        />
      </div>
      <div className="count__controls">
        <button
          type="button"
          className="count__up"
          onClick={() => {
            increase(id);
          }}
        >
          <img src="./img/icon/Shape.png" alt="increase" />
        </button>
        <button
          type="button"
          className="count__down"
          onClick={() => {
            decrease(id);
          }}
        >
          <img src="./img/icon/Shape-down.png" alt="down" type="button" />
        </button>
      </div>
    </div>
  );
};

export default Count;
