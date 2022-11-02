import { Outlet } from "react-router-dom";

export const ParentComp = () => {
  let user = "Rohan";
  return (
    <>
      {/* <h1>Welcome to parent comp</h1> */}
      <Outlet />
    </>
  );
};
