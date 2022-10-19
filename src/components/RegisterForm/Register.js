import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./register.css";

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
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Enter full name" {...register("fullName")} />
        <br />

        {errors.fullName?.message && (
          <span className="error_message">{errors.fullName.message}</span>
        )}
        <br />
        <input placeholder="Enter Email" {...register("email")} />
        <br />

        {errors.email?.message && (
          <span className="error_message">{errors.email.message}</span>
        )}
        <br />
        <input placeholder="Enter phone number" {...register("phone")} />
        <br />

        {errors.phone?.message && (
          <span className="error_message">{errors.phone.message}</span>
        )}
        <br />
        <input placeholder="Enter password" {...register("password")} />
        <br />

        {errors.password?.message && (
          <span className="error_message">{errors.password.message}</span>
        )}
        <br />

        <input
          placeholder="Enter confirm password"
          {...register("confirmPassword")}
        />
        <br />
        {errors.confirmPassword?.message && (
          <span className="error_message">
            {errors.confirmPassword.message}
          </span>
        )}
        <br />
        <input type="submit" value="submit form" />
      </form>
    </>
  );
};
