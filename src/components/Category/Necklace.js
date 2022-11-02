import { useEffect, useState } from "react";
import { useJewelleryByCategoryApi } from "../../Api/JewelleryApi/useJewelleryApi";
import { Navbar } from "../Navbar/Navbar";
import { SingleProduct } from "../Single Product/singleProduct";
import "./Category.css";

export const Necklace = () => {
  const { isLoading, data } = useJewelleryByCategoryApi("necklace");
  const [allNecklace, setallNecklace] = useState([]);
  useEffect(() => {
    setallNecklace(data);
  }, [data]);
  return (
    <>
      <Navbar />
      {allNecklace && (
        <div className="container category_container">
          <div className="row">
            {allNecklace &&
              allNecklace.map((jewellery) => {
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
