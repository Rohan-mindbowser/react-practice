import { useParams } from "react-router-dom";
export const ViewProduct = () => {
  let { id } = useParams();
  return (
    <>
      <h1>view product</h1>
      {console.log(id)}
    </>
  );
};
