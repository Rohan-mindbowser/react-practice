import React, { useContext } from "react";
import { MultiForm } from "../../../context/MultiFormContext";
import { useForm } from "react-hook-form";

const AccountDetails = () => {
  const { multiFormData, setMultiFormData, pageNumber, setPageNumber } =
    useContext(MultiForm);
  const {
    register,
    formState: { errors },
  } = useForm();
  const formData = () => console.log(multiFormData);

  return (
    <div className="personal_details_container">
      <h2 className="mb-4">Account Details</h2>
      <form>
        <input
          autoComplete="off"
          className="form-input-field"
          placeholder="Enter email"
          type="text"
          defaultValue={multiFormData?.email}
          {...register("email")}
          onChange={(e) => {
            setMultiFormData({ ...multiFormData, email: e.target.value });
          }}
        />
        <input
          autoComplete="off"
          className="form-input-field"
          placeholder="Enter password"
          type="password"
          defaultValue={multiFormData?.password}
          {...register("password")}
          onChange={(e) => {
            setMultiFormData({
              ...multiFormData,
              password: e.target.value,
            });
          }}
        />
        <input
          autoComplete="off"
          className="form-input-field"
          placeholder="Enter confirm password"
          type="password"
          {...register("confirmPassword")}
          defaultValue={multiFormData.confirmPassword}
          onChange={(e) => {
            setMultiFormData({
              ...multiFormData,
              confirmPassword: e.target.value,
            });
          }}
        />
        <br />
        {/* <input type="submit" /> */}
      </form>
      <div className="d-flex justify-content-between">
        <button
          className={pageNumber === 0 ? "disable-btn" : "custom-btn"}
          disabled={pageNumber === 0 ? true : false}
          onClick={() => setPageNumber((currValue) => currValue - 1)}
        >
          Prev
        </button>
        <button
          type="submit"
          className="custom-btn"
          onClick={() => {
            formData();
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default AccountDetails;
