import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./register.css";
import signup from "./img/signup1.png";
import axios from "axios";
import { Link } from "react-router-dom";

export const Register = () => {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/^[aA-zZ\s]+$/, "Full name must be a string")
      .required(),
    email: yup.string().email().required(),
    phone: yup
      .number("Phone must be a number")
      .integer("Phone must be a number")
      .required(),
    password: yup.string().min(5).max(32).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password and Confirm does not match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isDirty },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
    },
  });
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/api/emp/signup", {
        name: data.fullName,
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        alert("Data submitted success..");
        reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="signup_container">
        <div className="signup_content">
          <div className="left">
            <img src={signup} />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form_input">
                <label className="form_label">Full Name</label>
                <input
                  placeholder="Enter full name"
                  {...register("fullName")}
                />
                {errors.fullName?.message && (
                  <span className="error_message">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="form_input">
                <label className="form_label">Email</label>
                <input placeholder="Enter Email" {...register("email")} />
                {errors.email?.message && (
                  <span className="error_message">{errors.email.message}</span>
                )}
              </div>

              <div className="form_input">
                <label className="form_label">Phone Number</label>
                <input
                  placeholder="Enter Phone number"
                  {...register("phone")}
                />

                {errors.phone?.message && (
                  <span className="error_message">{errors.phone.message}</span>
                )}
              </div>

              <div className="form_input">
                <label className="form_label">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  {...register("password")}
                />
                {errors.password?.message && (
                  <span className="error_message">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="form_input">
                <label className="form_label">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Enter confirm password"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword?.message && (
                  <span className="error_message">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <button className="submit-btn" type="submit">
                submit form
              </button>
              <br/>
              <Link style={{"color":"white"}} to="/login">Already Have an Account?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
