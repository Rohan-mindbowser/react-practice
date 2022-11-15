import "./style.css";

export const SingleCartProduct = ({ product }) => {
  return (
    <>
      <div className="cart_container mb-3">
        <div className="image">
          <img src={product.image}></img>
        </div>
        <div className="product_info">
          <span className="product_names">{product.product_name}</span>
          <br />
          <span className="product_id">{product._id}</span>
          <br />
          <span className="checkout_product_price">
            Rs{" "}
            {currencyFormat(
              (product.original_price -
                (product.discount * product.original_price) / 100) *
                product.quantity
            )}
          </span>
          <br />
          <div className="d-flex justify-content-between mt-3">
            <p style={{ margin: "0px" }}>
              Quantity :{" "}
              <span>
                <input
                  className="quantity_input"
                  min="1"
                  max="3"
                  type="number"
                  value={product.quantity}
                ></input>
              </span>
            </p>
            <button className="custom-btn">Remove</button>
          </div>
        </div>
      </div>
    </>
  );
};

function currencyFormat(num) {
  if (num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}
