import { useParams } from "react-router-dom";

export const Books = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Book no {id}</h1>
    </>
  );
};
