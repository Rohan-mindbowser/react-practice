import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 3,
  //   };
  return (
    <div className="container mb-5 mt-5">
      <Slider {...settings}>
        <div>
          <img
            className="slider_img"
            src="https://images.cltstatic.com/media/product/350/AE00015-SS0000-amelia-e-earrings-in--silver-prd-1-base.jpg"
          ></img>
        </div>
        <div>
          <img
            className="slider_img"
            src="https://images.cltstatic.com/media/product/350/AE00015-SS0000-amelia-e-earrings-in--silver-prd-1-base.jpg"
          ></img>
        </div>
        <div>
          <img
            className="slider_img"
            src="https://images.cltstatic.com/media/product/350/AE00015-SS0000-amelia-e-earrings-in--silver-prd-1-base.jpg"
          ></img>
        </div>
        <div>
          <img
            className="slider_img"
            src="https://images.cltstatic.com/media/product/350/AE00015-SS0000-amelia-e-earrings-in--silver-prd-1-base.jpg"
          ></img>
        </div>
        <div>
          <img
            className="slider_img"
            src="https://images.cltstatic.com/media/product/350/AE00015-SS0000-amelia-e-earrings-in--silver-prd-1-base.jpg"
          ></img>
        </div>
        <div>
          <img
            className="slider_img"
            src="https://images.cltstatic.com/media/product/350/AE00015-SS0000-amelia-e-earrings-in--silver-prd-1-base.jpg"
          ></img>
        </div>
        <div>
          <img
            className="slider_img"
            src="https://images.cltstatic.com/media/product/350/AE00015-SS0000-amelia-e-earrings-in--silver-prd-1-base.jpg"
          ></img>
        </div>
        <div>
          <img
            className="slider_img"
            src="https://images.cltstatic.com/media/product/350/AE00015-SS0000-amelia-e-earrings-in--silver-prd-1-base.jpg"
          ></img>
        </div>
        <div>
          <img
            className="slider_img"
            src="https://images.cltstatic.com/media/product/350/AE00015-SS0000-amelia-e-earrings-in--silver-prd-1-base.jpg"
          ></img>
        </div>
        <div>
          <img
            className="slider_img"
            src="https://images.cltstatic.com/media/product/350/AE00015-SS0000-amelia-e-earrings-in--silver-prd-1-base.jpg"
          ></img>
        </div>
        <div>
          <img
            className="slider_img"
            src="https://images.cltstatic.com/media/product/350/AE00015-SS0000-amelia-e-earrings-in--silver-prd-1-base.jpg"
          ></img>
        </div>
        <div>
          <img
            className="slider_img"
            src="https://images.cltstatic.com/media/product/350/AE00015-SS0000-amelia-e-earrings-in--silver-prd-1-base.jpg"
          ></img>
        </div>
      </Slider>
    </div>
  );
};
