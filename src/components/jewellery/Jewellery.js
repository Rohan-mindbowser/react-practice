import { useEffect, useState } from "react";
import { useJewelleryApi } from "../../Api/JewelleryApi/useJewelleryApi";
import { Bracelet } from "../Category/Bracelet";
import { Navbar } from "../Navbar/Navbar";
import { SingleProduct } from "../Single Product/singleProduct";
import "./style.css";

export const Jewellery = () => {
  const { isLoading, data } = useJewelleryApi();
  const [jewelleryData, setJewelleryData] = useState([]);

  let allBraceletData = [];
  useEffect(() => {
    setJewelleryData(data);
  });
  return (
    <>
      <Navbar />
      {isLoading && <h1>Loading...</h1>}
      <div className="container jewellery_container">
        <div className="row">
          <div className="col-md-3 mb-3">
            {jewelleryData &&
              jewelleryData.map((jewellery) => {
                if (jewellery.category === "bracelet") {
                  return <SingleProduct jewellery={jewellery} />;
                }
              })}
          </div>
          <div className="col-md-3">
            {jewelleryData &&
              jewelleryData.map((jewellery) => {
                if (jewellery.category === "earring") {
                  return <SingleProduct jewellery={jewellery} />;
                }
              })}
          </div>
          <div className="col-md-3">
            {jewelleryData &&
              jewelleryData.map((jewellery) => {
                if (jewellery.category === "ring") {
                  return <SingleProduct jewellery={jewellery} />;
                }
              })}
          </div>
          <div className="col-md-3">
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
