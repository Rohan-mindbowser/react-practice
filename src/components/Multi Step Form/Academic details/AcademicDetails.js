import React, { useContext } from "react";
import { MultiForm } from "../../../context/MultiFormContext";
import { useForm } from "react-hook-form";

const AcademicDetails = () => {
  const { multiFormData, setMultiFormData, pageNumber, setPageNumber } =
    useContext(MultiForm);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="personal_details_container">
        <h2 className="mb-4">Academic Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-input-field"
            placeholder="Enter your degree"
            type="text"
            defaultValue={multiFormData?.degree}
            {...register("degree")}
            onChange={(e) => {
              setMultiFormData({ ...multiFormData, degree: e.target.value });
            }}
          />
          <input
            className="form-input-field"
            placeholder="Enter college name"
            type="text"
            defaultValue={multiFormData?.collegeName}
            {...register("collegeName")}
            onChange={(e) => {
              setMultiFormData({
                ...multiFormData,
                collegeName: e.target.value,
              });
            }}
          />
          <input
            className="form-input-field"
            placeholder="Enter year of passing"
            type="number"
            {...register("yearOfPassing")}
            defaultValue={
              multiFormData.yearOfPassing > 0 ? multiFormData.yearOfPassing : ""
            }
            onChange={(e) => {
              setMultiFormData({
                ...multiFormData,
                yearOfPassing: e.target.value,
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
            className={pageNumber === 2 ? "disable-btn" : "custom-btn"}
            disabled={pageNumber === 2 ? true : false}
            onClick={() => setPageNumber((currValue) => currValue + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AcademicDetails;
