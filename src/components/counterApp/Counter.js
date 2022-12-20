import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incCounter, decCounter } from "../../redux/counterSlice";
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "../../redux/productApiSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // const { data, isLoading } = useGetAllProductsQuery();
  const { data: singleProduct,isLoading } = useGetSingleProductQuery(3);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(singleProduct);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(incCounter())}
      >
        +
      </button>
      {counter}
      <button
        className="btn btn-primary"
        onClick={() => dispatch(decCounter())}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
