import React, { useContext } from "react";
import { MultiForm } from "../../../context/MultiFormContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

const PersonalDetails = () => {
  const { multiFormData, setMultiFormData, pageNumber, setPageNumber } =
    useContext(MultiForm);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields, isDirty },
  } = useForm({
    defaultValues: { firstname: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  console.log("isDirty", isDirty);

  return (
    <>
      <div className="personal_details_container">
        <h2 className="mb-4">Personal Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-input-field"
            placeholder="Enter first name"
            type="text"
            name="firstname"
            defaultValue={multiFormData?.firstname}
            {...register("firstname", { required: true })}
            onChange={(e) => {
              setMultiFormData({ ...multiFormData, firstname: e.target.value });
            }}
          />
          {isDirty && errors.firstname?.message && (
            <span className="error_message">{errors.firstname.message}</span>
          )}
          <input
            className="form-input-field"
            placeholder="Enter last name"
            type="text"
            defaultValue={multiFormData?.lastname}
            {...register("lastname")}
            onChange={(e) => {
              setMultiFormData({ ...multiFormData, lastname: e.target.value });
            }}
          />
          <div className="mb-3">
            <span className="form_label">Gender :</span>
            <span className="ms-3 form_label me-1">Male</span>
            <input
              checked={multiFormData.gender === "male"}
              className="me-3"
              type="radio"
              name="gender"
              value="male"
              {...register("gender")}
              onChange={(e) => {
                setMultiFormData({ ...multiFormData, gender: e.target.value });
              }}
            />
            <span className="form_label me-1">Female</span>
            <input
              checked={multiFormData.gender === "female"}
              type="radio"
              name="gender"
              value="female"
              {...register("gender")}
              onChange={(e) => {
                setMultiFormData({ ...multiFormData, gender: e.target.value });
              }}
            />
          </div>
          <input
            className="form-input-field"
            placeholder="Enter age"
            type="number"
            {...register("age")}
            defaultValue={multiFormData.age > 0 ? multiFormData.age : ""}
            onChange={(e) => {
              setMultiFormData({ ...multiFormData, age: e.target.value });
            }}
          />
          <br />
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
              className={!isValid ? "disable-btn" : "custom-btn"}
              disabled={!isValid}
              onClick={() => setPageNumber((currValue) => currValue + 1)}
            >
              Next
            </button>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default PersonalDetails;
