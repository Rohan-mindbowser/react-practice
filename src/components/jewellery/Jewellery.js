import { useEffect, useState } from "react";
import { useJewelleryApi } from "../../Api/JewelleryApi/useJewelleryApi";
import { Navbar } from "../Navbar/Navbar";
import { SingleProduct } from "../Single Product/singleProduct";
import { ProductSlider } from "../Product Slider/ProductSlider";
import "./style.css";
import axios from "axios";

export const Jewellery = () => {
  const { isLoading, data } = useJewelleryApi();
  const [inputRange, setInputRange] = useState();
  const [jewelleryData, setJewelleryData] = useState([]);

  useEffect(() => {
    setJewelleryData(data);
  }, [data]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <Navbar />
      <div className="container jewellery_container">
        <span>Filter Products By Price</span>
        <div className="d-flex align-items-center mb-3">
          <span>0</span>
          <input
            className="mx-2"
            type="range"
            min="1000"
            max="5000"
            step="500"
            onChange={(e) => {
              setInputRange(e.target.value);
              axios
                .get(
                  `http://localhost:8000/api/products/productsbypricerange?min=1000&max=${e.target.value}`
                )
                .then((res) => {
                  const jewellery = res.data;
                  setJewelleryData(jewellery);
                });
            }}
          ></input>
          <span>Rs {inputRange || 0}</span>
        </div>
        <div className="row">
          {jewelleryData &&
            jewelleryData.map((jewellery) => {
              return (
                <div className="col-lg-3 ">
                  <SingleProduct jewellery={jewellery} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
