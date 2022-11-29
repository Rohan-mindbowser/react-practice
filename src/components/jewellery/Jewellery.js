import { useEffect, useState } from "react";
import { useJewelleryApi } from "../../Api/JewelleryApi/useJewelleryApi";
import { Navbar } from "../Navbar/Navbar";
import { SingleProduct } from "../Single Product/singleProduct";
import "./style.css";
import axios from "axios";

export const Jewellery = () => {
  const { isLoading, data } = useJewelleryApi();
  const [inputRange, setInputRange] = useState();
  const [jewelleryData, setJewelleryData] = useState([]);

  function lowToHigh() {
    let sortedJewellery = [...jewelleryData];
    sortedJewellery.sort(
      (a, b) => parseFloat(a.original_price) - parseFloat(b.original_price)
    );
    setJewelleryData(sortedJewellery);
  }

  function highToLow() {
    let sortedJewellery = [...jewelleryData];
    sortedJewellery.sort(
      (a, b) => parseFloat(b.original_price) - parseFloat(a.original_price)
    );
    setJewelleryData(sortedJewellery);
  }

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
        <div className="d-flex align-items-center mb-3">
          <div className="d-flex align-items-center flex-column flex-wrap">
            <span className="">Filter Products By Price</span>
            <div>
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
          </div>
          <div className="ms-5">
            <span>SORT PRODUCTS</span>
            <div className="d-flex">
              <button
                onClick={() => {
                  lowToHigh();
                }}
                className="btn btn-primary me-3"
              >
                LOW TO HIGH
              </button>
              <button
                onClick={() => {
                  highToLow();
                }}
                className="btn btn-primary"
              >
                HIGH TO LOW
              </button>
            </div>
          </div>
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

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions1"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Sort Products
          </h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body"></div>
      </div>
    </>
  );
};
