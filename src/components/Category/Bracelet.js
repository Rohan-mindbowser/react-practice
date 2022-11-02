import "./Category.css";

export const Bracelet = ({ jewellery }) => {
  return (
    <>
      <img src={jewellery.image} alt="product image"></img>
      <h1>{jewellery.product_name}</h1>
    </>
  );
};
