import { useEffect, useState } from "react";
import { useJewelleryApi } from "../../Api/JewelleryApi/useJewelleryApi";
import { Bracelet } from "../Category/Bracelet";
import { Navbar } from "../Navbar/Navbar";
import { SingleProduct } from "../Single Product/singleProduct";
import "./style.css";
import axios from "axios";

export const Jewellery = () => {
  const { isLoading, data } = useJewelleryApi();
  const [jewelleryData, setJewelleryData] = useState([]);

  let allBraceletData = [];
  useEffect(() => {
    setJewelleryData(data);
  }, [data]);
  return (
    <>
      <Navbar />
      {isLoading && <h1>Loading...</h1>}
      {!jewelleryData && <h1>No match found</h1>}
      <div className="container jewellery_container">
        <input
          type="range"
          min="1000"
          max="5000"
          step="1000"
          onChange={(e) => {
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
        <div className="row">
          <div className="col-lg-3 mb-3">
            {jewelleryData &&
              jewelleryData.map((jewellery) => {
                if (jewellery.category === "bracelet") {
                  return <SingleProduct jewellery={jewellery} />;
                }
              })}
          </div>
          <div className="col-lg-3">
            {jewelleryData &&
              jewelleryData.map((jewellery) => {
                if (jewellery.category === "earring") {
                  return <SingleProduct jewellery={jewellery} />;
                }
              })}
          </div>
          <div className="col-lg-3">
            {jewelleryData &&
              jewelleryData.map((jewellery) => {
                if (jewellery.category === "ring") {
                  return <SingleProduct jewellery={jewellery} />;
                }
              })}
          </div>
          <div className="col-lg-3">
            {jewelleryData &&
              jewelleryData.map((jewellery) => {
                if (jewellery.category === "necklace") {
                  return <SingleProduct jewellery={jewellery} />;
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
};
