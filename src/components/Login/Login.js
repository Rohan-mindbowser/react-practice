import login from "./img/login.png";
import "./login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

export const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).max(32).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
    },
  });
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/api/emp/login", {
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        alert("Login success..");
        localStorage.setItem("token", response.data);
        console.log(response.data);
        reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="login_container">
        <div className="login_content">
          <div className="left">
            <img src={login}></img>
          </div>
          <div className="right">
            <div className="login_details">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form_element">
                  <label>Email :</label>
                  <input placeholder="Enter Email id" {...register("email")} />
                  {errors.email?.message && (
                    <span className="error_message">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="form_element">
                  <label>Password :</label>
                  <input
                    placeholder="Enter Password"
                    {...register("password")}
                  />
                  {errors.password?.message && (
                    <span className="error_message">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="form_element">
                  <button className="login-btn">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
