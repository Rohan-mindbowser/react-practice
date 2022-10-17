import { useContext } from "react";
import { AppContext } from "../../App";

export const Profile = () => {
  let { name, setName } = useContext(AppContext);
  const changeName = (name) => {
    setName(name);
  };
  return (
    <>
      <h1>Hello {name}</h1>
      <input onChange={(e)=>changeName(e.target.value)}></input>
    </>
  );
};
