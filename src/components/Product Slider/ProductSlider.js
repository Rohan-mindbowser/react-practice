import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useJewelleryByCategoryApi } from "../../Api/JewelleryApi/useJewelleryApi";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { settings } from "../../Common/ImageSlider/ImageSlider";


const ProductSlider = () => {
  let { cat } = useParams();
  const { isLoading, data } = useJewelleryByCategoryApi(cat);
  const [sliderData, setSliderData] = useState([]);
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    setSliderData(data);
  }, [data, location]);

  return (
    <div className="mt-5">
      <h4 className="mt-5 mb-3">Similar To This Product</h4>
      <Slider {...settings}>
        {sliderData &&
          sliderData.map((product) => {
            return (
              <div>
                <NavLink to={`/product/${product.category}/${product._id}`}>
                  <img style={{ width: "90%" }} src={product.image}></img>
                </NavLink>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
