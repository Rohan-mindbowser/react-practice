import { useEffect, useState } from "react";
import { useJewelleryByCategoryApi } from "../../Api/JewelleryApi/useJewelleryApi";
import { Navbar } from "../Navbar/Navbar";
import { SingleProduct } from "../Single Product/singleProduct";
import "./Category.css";

export const Bracelet = ({ jewellery }) => {
  const { isLoading, data } = useJewelleryByCategoryApi("bracelet");
  const [allBracelet, setAllBracelet] = useState([]);
  useEffect(() => {
    setAllBracelet(data);
  }, [data]);
  return (
    <>
      <Navbar />
      {allBracelet && (
        <div className="container category_container">
          <div className="row">
            {allBracelet &&
              allBracelet.map((jewellery) => {
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
