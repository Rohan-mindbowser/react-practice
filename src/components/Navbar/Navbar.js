import { IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { cart } from "../../context/CartContext";
import { SingleCartProduct } from "../single cart product/SingleCartProduct";
import SingleWishListProduct from "../single wishlist product/SingleWishListProduct";
import "./style.css";

export const Navbar = () => {
  const { cartProducts, wishList } = useContext(cart);
  const totalCartProducts = cartProducts.length;
  const [productsInCart, setproductsInCart] = useState([]);
  const [productsInWishList, setproductsInWishList] = useState([]);
  useEffect(() => {
    setproductsInCart(cartProducts);
    setproductsInWishList(wishList);
  }, [cartProducts, wishList]);
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://assets.cltstatic.com/images/freedom/shaya-pride-month.gif"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/jewellery"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/bracelet"
                >
                  Bracelets
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/ring"
                >
                  Rings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/necklace"
                >
                  Necklace
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/earring"
                >
                  Earring
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/checkout"
                >
                  Checkout
                </NavLink>
              </li>
            </ul>
          </div>
          <i
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="fa-sharp fa-solid fa-bag-shopping"
          >
            ({cartProducts && cartProducts.length})
          </i>
          {/* <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton> */}
          <i
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
            className="fa-regular fa-heart nav_wishlist ms-3"
          >
            ({wishList && wishList.length})
          </i>
        </div>
      </nav>

      {/* Cart modal  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Your Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {productsInCart &&
                productsInCart.map((product) => {
                  return <SingleCartProduct product={product} />;
                })}
            </div>
            <div className="modal-footer">
              <NavLink to="/checkout">
                <button
                  className="custom-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="button"
                >
                  Checkout
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* wishlist  */}
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Wish List
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {productsInWishList &&
            productsInWishList.map((product) => {
              return <SingleWishListProduct product={product} />;
            })}
        </div>
      </div>
    </>
  );
};
