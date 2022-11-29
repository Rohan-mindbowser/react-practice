import React, { useContext, useState } from "react";
import PersonalDetails from "./Personal Details/PersonalDetails";
import AcademicDetails from "./Academic details/AcademicDetails";
import AccountDetails from "./Account details/AccountDetails";
import "./style.css";
import { MultiForm } from "../../context/MultiFormContext";

const MultiStepForm = () => {
  const { pageNumber, setPageNumber } = useContext(MultiForm);
  function displayForm() {
    if (pageNumber === 0) {
      return <PersonalDetails />;
    } else if (pageNumber === 1) {
      return <AcademicDetails />;
    } else {
      return <AccountDetails />;
    }
  }
  return (
    <>
      <div className="form-container">
        {displayForm()}
        <div
          className="d-flex justify-content-between mt-3"
          style={{ width: "20%" }}
        ></div>
      </div>
    </>
  );
};

export default MultiStepForm;
