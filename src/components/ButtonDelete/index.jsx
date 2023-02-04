const ButtonDelete = ({ deletProduct, id }) => {
  return (
    <button
      type="button"
      onClick={() => {
        deletProduct(id);
      }}
    >
      <img src="./img/icon/feather-icon/x.svg" alt="delet" />
    </button>
  );
};

export default ButtonDelete;
