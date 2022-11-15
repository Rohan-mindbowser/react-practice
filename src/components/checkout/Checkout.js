import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SingleCartProduct } from "../single cart product/SingleCartProduct";
import "./style.css";

export const Checkout = () => {
  const [localStorageProducts, setlocalStorageProducts] = useState([]);
  useEffect(() => {
    setlocalStorageProducts(JSON.parse(localStorage.getItem("cartItem")));
  }, []);
  return (
    <>
      {/* {localStorageProducts && console.log(localStorageProducts)} */}
      <div className="container">
        <div className="mb-3 back_link">
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
          <div className="col-lg-5">2</div>
        </div>
      </div>
    </>
  );
};
