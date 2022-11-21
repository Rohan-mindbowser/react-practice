import { useContext } from "react";
import { cart } from "../../context/CartContext";
import "./style.css";

export const SingleCartProduct = ({ product }) => {
  const { cartProducts, setCartProducts } = useContext(cart);
  function removeCartProduct() {
    // setCartProducts(

    // );
    cartProducts.map((item, index) => {
      if (item._id === product._id) {
        cartProducts.splice(index, 1);
      }
    });
    setCartProducts(cartProducts);
  }
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
          <div className="d-flex justify-content-between mt-4">
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
            <button
              className="custom-btn"
              onClick={() => {
                removeCartProduct();
              }}
            >
              Remove
            </button>
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
