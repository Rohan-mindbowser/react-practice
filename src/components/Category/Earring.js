import { useEffect, useState } from "react";
import { useJewelleryByCategoryApi } from "../../Api/JewelleryApi/useJewelleryApi";
import { Navbar } from "../Navbar/Navbar";
import { SingleProduct } from "../Single Product/singleProduct";
import "./Category.css";

export const Earring = () => {
  const { isLoading, data } = useJewelleryByCategoryApi("earring");
  const [allEarring, setallEarring] = useState([]);
  useEffect(() => {
    setallEarring(data);
  }, [data]);
  return (
    <>
      <Navbar />
      {allEarring && (
        <div className="container category_container">
          <div className="row">
            {allEarring &&
              allEarring.map((jewellery) => {
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
