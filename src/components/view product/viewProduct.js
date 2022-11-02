import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSingleJewelleryApi } from "../../Api/JewelleryApi/useJewelleryApi";
import { Navbar } from "../Navbar/Navbar";
import { ProductSlider } from "../Product Slider/ProductSlider";

import "./style.css";

export const ViewProduct = () => {
  let { id } = useParams();
  const { isLoading, data } = useSingleJewelleryApi(id);
  const [singleJewellery, setSingleJewellery] = useState([]);
  useEffect(() => {
    setSingleJewellery(data);
  }, [data]);
  return (
    <>
      <Navbar />
      <div className="container view_product_container">
        <div className="mb-3 back_link">
          <NavLink to="/jewellery">
            <i class="fa-solid fa-arrow-left me-2"></i>Back
          </NavLink>
        </div>
        {singleJewellery && (
          <div className="row">
            <div className="col-lg-5">
              <img
                className="single_product_image"
                src={singleJewellery[0]?.image}
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
                <button className="custom-btn">Add To Cart</button>
                <i className="fa-solid fa-heart ms-3 heart_logo"></i>
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
      </div>

      {/* <ProductSlider /> */}
    </>
  );
};

function currencyFormat(num) {
  if (num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}
