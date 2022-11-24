import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { cart } from "../../context/CartContext";

const SingleWishListProduct = ({ product }) => {
  const [singleProduct, setsingleProduct] = useState([]);
  const { wishList, setWishList, setCartProducts, cartProducts } =
    useContext(cart);

  function removeWishListProduct() {
    wishList.forEach((item, index) => {
      if (item._id === product._id) {
        wishList.splice(index, 1);
      }
    });
    setWishList([...wishList]);
  }

  function increaseAndDecreaseQuantity(qty) {
    if (Number(qty) === 0) {
      removeWishListProduct();
    }
    wishList.forEach((item, index) => {
      if (item._id === product._id) {
        item.quantity = qty;
      }
    });
    setWishList([...wishList]);
  }

  function moveToCart() {
    setCartProducts([...cartProducts, { ...product }]);
    removeWishListProduct();
    toast("Product Moved to cart..", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

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
                    value={singleProduct.quantity}
                    onChange={(e) => {
                      increaseAndDecreaseQuantity(e.target.value);
                    }}
                  ></input>
                </span>
              </p>
              <button
                onClick={moveToCart}
                className="custom-btn"
                style={{ fontSize: "20px" }}
              >
                Add To Cart
              </button>
              <i
                onClick={() => {
                  removeWishListProduct();
                }}
                style={{ cursor: "pointer", color: "red", fontSize: "30px" }}
                className="fa-solid fa-trash"
              ></i>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

function currencyFormat(num) {
  if (num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}

export default SingleWishListProduct;
