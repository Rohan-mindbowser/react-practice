import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { cart } from "../../context/CartContext";
import "./style.css";

export const SingleProduct = ({ jewellery }) => {
  const { wishList, setWishList } = useContext(cart);
  function addToWishList() {
    let isQuantityUpdated = false;
    wishList.forEach((item) => {
      if (item._id === jewellery._id) {
        console.log("inside first loop");
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
      console.log("inside second loop");
      setWishList([...wishList, { ...jewellery, quantity: 1 }]);
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
      <div className="mb-5 single_product_container">
        <NavLink to={`/product/${jewellery.category}/${jewellery._id}`}>
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
        <i
          onClick={addToWishList}
          style={{ cursor: "pointer" }}
          className="fa-solid fa-heart fav-heart"
        ></i>
        <ToastContainer />
      </div>
    </>
  );
};

function currencyFormat(num) {
  return "Rs " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
