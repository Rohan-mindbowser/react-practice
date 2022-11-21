import React, { useContext, useEffect, useState } from "react";
import { cart } from "../../context/CartContext";

const SingleWishListProduct = ({ product }) => {
  const [singleProduct, setsingleProduct] = useState();
  const { wishList } = useContext(cart);
  useEffect(() => {
    setsingleProduct(product);
  }, [wishList]);
  return (
    <>
      {singleProduct && (
        <div className="cart_container mb-3">
          <div className="image">
            <img
              src={singleProduct.image}
              alt={singleProduct.product_name}
            ></img>
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
            <div className="d-flex justify-content-between align-items-center mt-4">
              <p style={{ margin: "0px" }}>
                Quantity :{" "}
                <span>
                  <input
                    className="quantity_input"
                    max="3"
                    type="number"
                    defaultValue={singleProduct?.quantity}
                    onChange={(e) => {
                      //   increaseAndDecreaseQuantity(e.target.value);
                    }}
                  ></input>
                </span>
              </p>
              <button
                className="custom-btn"
                style={{ fontSize: "20px" }}
                onClick={() => {
                  //   removeCartProduct();
                }}
              >
                Add To Cart
              </button>
              <i
                style={{ cursor: "pointer", color: "red",fontSize:"30px" }}
                className="fa-solid fa-trash"
              ></i>
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

export default SingleWishListProduct;
