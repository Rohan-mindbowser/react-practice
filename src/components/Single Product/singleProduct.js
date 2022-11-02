import { NavLink } from "react-router-dom";
import "./style.css";

export const SingleProduct = ({ jewellery }) => {
  return (
    <div className="mb-5 single_product_container">
      <NavLink to={`/product/${jewellery._id}`}>
        <img
          className="product_img"
          src={jewellery.image}
          alt="product image"
        ></img>
      </NavLink>
      <div className="product_inner_content p-1">
        <span className="price">
          {currencyFormat(
            jewellery.original_price -
              (jewellery.discount * jewellery.original_price) / 100
          )}
        </span>
        <span className="original_price">{jewellery.original_price}</span>
        <span className="product_name">{jewellery.product_name}</span>
      </div>
      <i className="fa-solid fa-heart fav-heart"></i>
    </div>
  );
};

function currencyFormat(num) {
  return "Rs " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
