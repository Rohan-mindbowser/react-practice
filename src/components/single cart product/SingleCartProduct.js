import { useContext, useEffect, useState } from "react";
import { cart } from "../../context/CartContext";
import "./style.css";

export const SingleCartProduct = ({ product }) => {
  const { cartProducts, setCartProducts } = useContext(cart);
  const [singleProduct, setSingleProduct] = useState();

  function removeCartProduct() {
    cartProducts.forEach((item, index) => {
      if (item._id === product._id) {
        cartProducts.splice(index, 1);
      }
    });
    setCartProducts([...cartProducts]);
  }

  function increaseAndDecreaseQuantity(qty) {
    if (Number(qty) === 0) {
      removeCartProduct();
    }
    cartProducts.map((item, index) => {
      if (item._id === product._id) {
        item.quantity = qty;
      }
    });
    setCartProducts([...cartProducts]);
  }

  useEffect(() => {
    setSingleProduct(product);
  }, [cartProducts]);

  return (
    <>
      {singleProduct && (
        <div className="cart_container mb-3">
          <div className="image">
            <img src={singleProduct.image}></img>
          </div>
          <div className="product_info">
            <span className="product_names">{singleProduct.product_name}</span>
            <br />
            <span className="product_id">{singleProduct._id}</span>
            <br />
            <span className="checkout_product_price">
              Rs{" "}
              {currencyFormat(
                (singleProduct.original_price -
                  (singleProduct.discount * singleProduct.original_price) /
                    100) *
                  singleProduct.quantity
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
                    Value={singleProduct.quantity}
                    onChange={(e) => {
                      increaseAndDecreaseQuantity(e.target.value);
                    }}
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
      )}
    </>
  );
};

function currencyFormat(num) {
  if (num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}
