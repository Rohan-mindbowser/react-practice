import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { cart } from "../../context/CartContext";
import { SingleCartProduct } from "../single cart product/SingleCartProduct";
import "./style.css";

export const Checkout = () => {
  const [localStorageProducts, setlocalStorageProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const { cartProducts, setCartProducts } = useContext(cart);

  useEffect(() => {
    setlocalStorageProducts(cartProducts);
    setSubTotal(
      cartProducts.reduce(
        (acc, curr) =>
          acc +
          (curr.original_price - (curr.discount * curr.original_price) / 100) *
            curr.quantity,
        0
      )
    );
  }, [localStorageProducts, cartProducts]);

  return (
    <>
      {/* {localStorageProducts && console.log(localStorageProducts)} */}
      <div className="container mt-3">
        <div className="mb-4 back_link">
          <NavLink to="/jewellery">
            <i className="fa-solid fa-arrow-left me-2"></i>Back To Shopping
          </NavLink>
        </div>
        <div className="row">
          <div className="col-lg-7 all_cart_products">
            {localStorageProducts &&
              localStorageProducts.map((product) => {
                return <SingleCartProduct product={product} />;
              })}
          </div>
          <div className="col-lg-5 px-5 order_summary_container">
            <h3 className="order_summary">Order Summary</h3>
            <div className="sub_total d-flex justify-content-between">
              <span className="sub_total_title">Sub Total</span>
              <span className="sub_total_value">
                Rs {subTotal > 0 ? currencyFormat(subTotal) : 0}
              </span>
            </div>
            <div className="apply_coupon d-flex justify-content-between my-2">
              <span className="apply_coupon_title">Apply Coupon</span>
              <button className="apply_coupon_btn">Apply Coupon</button>
            </div>
            <div className="delivery_charges d-flex justify-content-between">
              <span className="delivery_charges_title">
                Delivery Charge (Standard)
              </span>
              <span className="delivery_charges_value">FREE</span>
            </div>
            <div className="total_cost d-flex justify-content-between mt-2">
              <span className="total_cost_title">TOTAL COST</span>
              <span className="total_cost_value">
                Rs {subTotal > 0 ? currencyFormat(subTotal) : 0}
              </span>
            </div>
            <button
              disabled={subTotal <= 0}
              className="mt-3 w-100 checkout_btn"
            >
              Checkout Securely
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
