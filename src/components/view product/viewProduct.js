import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";
import { cart } from "../../context/CartContext";
import ProductSlider from "../Product Slider/ProductSlider";
import axios from "axios";

export const ViewProduct = () => {
  let { id } = useParams();
  const [singleJewellery, setSingleJewellery] = useState([]);
  let location = useLocation();

  const { cartProducts, setCartProducts, wishList, setWishList } =
    useContext(cart);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/singleproduct?id=${id}`)
      .then((res) => {
        const jewellery = res.data;
        setSingleJewellery(jewellery);
        window.scrollTo(0, 0);
      });
  }, [location]);

  function addToCart(product) {
    let isQuantityUpdated = false;
    cartProducts.forEach((item) => {
      if (item._id === product[0]._id) {
        item.quantity = item.quantity + 1;
        isQuantityUpdated = true;
        setCartProducts([...cartProducts]);
        toast("Product Quantity Updated..", {
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
    });
    // console.log(cartProducts);
    if (!isQuantityUpdated) {
      setCartProducts([...cartProducts, { ...product[0], quantity: 1 }]);
      toast("Product added in cart", {
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
  }

  function addToWishList(jewellery) {
    console.log(jewellery);
    let isQuantityUpdated = false;
    wishList.forEach((item) => {
      if (item._id === jewellery[0]._id) {
        item.quantity = item.quantity + 1;
        isQuantityUpdated = true;
        setWishList([...wishList]);
        toast("Product Wish List Quantity Updated..", {
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
    });
    // console.log(cartProducts);
    if (!isQuantityUpdated) {
      setWishList([...wishList, { ...jewellery[0], quantity: 1 }]);
      toast("Product added to wishlist", {
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
  }

  return (
    <>
      <Navbar />
      <div className="container view_product_container">
        <div className="mb-3 back_link">
          <NavLink to="/jewellery">
            <i className="fa-solid fa-arrow-left me-2"></i>Back
          </NavLink>
        </div>
        {singleJewellery && (
          <div className="row">
            <div className="col-lg-5">
              <img
                className="single_product_image"
                src={singleJewellery[0]?.image}
                alt={singleJewellery[0]?.product_name}
              ></img>
            </div>
            <div className="col-lg-7 single_product_content">
              <h2 className="single_product_name">
                {singleJewellery[0]?.product_name}
              </h2>
              <p className="single_product_offer mt-2 mb-5">
                Buy 2 & Get Extra 5% Off
              </p>
              <div className="d-flex flex-row flex-wrap align-items-center">
                <span className="single_product_discounted_price ">
                  &#8377;
                  {currencyFormat(
                    singleJewellery[0]?.original_price -
                      (singleJewellery[0]?.discount *
                        singleJewellery[0]?.original_price) /
                        100
                  )}
                </span>
                <span className="single_product_original_price ms-3">
                  {currencyFormat(singleJewellery[0]?.original_price)}
                </span>
                <span className="single_product_discount">
                  ({singleJewellery[0]?.discount}% OFF)
                </span>
              </div>
              <br />
              <div className="add_to_cart_and_heart mt-3">
                <button
                  className="custom-btn"
                  // onClick={() => {
                  //   addProductToLocalStorage(singleJewellery);
                  // }}
                  onClick={() => {
                    addToCart(singleJewellery);
                  }}
                >
                  Add To Cart
                </button>
                <i
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    addToWishList(singleJewellery);
                  }}
                  className="fa-solid fa-heart ms-3 heart_logo"
                ></i>
              </div>
              <div className="mt-4 single_product_desc">
                <p className="single_product_desc">
                  {singleJewellery[0]?.description}
                </p>
              </div>
              <div className="my-4">
                <p className="single_product_weight">
                  Gross Weight :{singleJewellery[0]?.weight}
                </p>
              </div>
              <div>
                <p className="single_product_length">
                  Length :{singleJewellery[0]?.length}
                </p>
              </div>
            </div>
          </div>
        )}

        <ProductSlider />
      </div>
      {/* <button
        onClick={() => {
          console.log(JSON.parse(localStorage.getItem("cartItem")));
        }}
      >
        View
      </button> */}
      <ToastContainer />
    </>
  );
};

function currencyFormat(num) {
  if (num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}
