import { useContext } from "react";
import { AppContext } from "../../App";

export const Home = () => {
  const { name } = useContext(AppContext);
  return (
    <>
      <h1>Welcome to homepage {name}</h1>
    </>
  );
};
