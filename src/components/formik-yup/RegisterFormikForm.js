import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password must match"),
});

const RegisterFormikForm = () => {
  const { errors, handleBlur, touched, handleChange, handleSubmit, values } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "100vw",
        minHeight: "100vh",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
        >
          <Grid item>
            <TextField
              id="outlined-basic"
              name="name"
              label="Full Name"
              variant="outlined"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && (
              <p className="error-alert">{errors.name}</p>
            )}
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className="error-alert">{errors.email}</p>
            )}
          </Grid>
          <Grid item>
            <TextField
              type="password"
              id="outlined-basic"
              name="password"
              label="Password"
              variant="outlined"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <p className="error-alert">{errors.password}</p>
            )}
          </Grid>
          <Grid item>
            <TextField
              type="password"
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="error-alert">{errors.confirmPassword}</p>
            )}
          </Grid>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default RegisterFormikForm;
