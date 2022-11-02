import { useEffect, useState } from "react";
import { useJewelleryByCategoryApi } from "../../Api/JewelleryApi/useJewelleryApi";
import { Navbar } from "../Navbar/Navbar";
import { SingleProduct } from "../Single Product/singleProduct";
import "./Category.css";

export const Ring = () => {
  const { isLoading, data } = useJewelleryByCategoryApi("ring");
  const [allRing, setallRing] = useState([]);
  useEffect(() => {
    setallRing(data);
  }, [data]);
  return (
    <>
      <Navbar />
      {allRing && (
        <div className="container category_container">
          <div className="row">
            {allRing &&
              allRing.map((jewellery) => {
                return (
                  <div className="col-md-4">
                    <SingleProduct jewellery={jewellery} />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};
