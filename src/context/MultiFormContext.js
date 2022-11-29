import React, { createContext, useState } from "react";

export const MultiForm = createContext();

const MultiFormContext = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const [multiFormData, setMultiFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    age: 0,
    degree: "",
    collegeName: "",
    yearOfPassing: 0,
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <MultiForm.Provider
      value={{ multiFormData, setMultiFormData, pageNumber, setPageNumber }}
    >
      {children}
    </MultiForm.Provider>
  );
};

export default MultiFormContext;
