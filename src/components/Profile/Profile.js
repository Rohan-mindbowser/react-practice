import { useEffect, useState } from "react";

export const Profile = () => {
  const [hello,setHello] = useState("Hello")
  useEffect(() => {
    console.log("Profile use effect ran...");
  },[hello]);
  return (
    <>
      <h1>Welcome to profile page </h1>
      <button
        onClick={() => {
          console.log("clicked :",hello);
          setHello("World")
        }}
      >Click</button>
    </>
  );
};
