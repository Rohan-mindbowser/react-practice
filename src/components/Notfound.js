import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Notfound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <>
      <h1>Not found page</h1>
    </>
  );
};
