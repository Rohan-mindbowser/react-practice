import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoute = () => {
  let navigate = useNavigate();
  useEffect(() => {
    // if (!localStorage.getItem("token")) {
    //   navigate("/login");
    // }
  });
  return (
    <>
      <Outlet />
    </>
  );
};
