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
              error={(touched.name && errors.name) || false}
              helperText={touched.name && errors.name ? errors.name : null}
              id="outlined-basic"
              name="name"
              label="Full Name"
              variant="outlined"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item>
            <TextField
              error={(touched.email && errors.email) || false}
              helperText={touched.email && errors.email ? errors.email : null}
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item>
            <TextField
              error={(touched.password && errors.password) || false}
              helperText={
                touched.password && errors.password ? errors.password : null
              }
              type="password"
              id="outlined-basic"
              name="password"
              label="Password"
              variant="outlined"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item>
            <TextField
              error={
                (touched.confirmPassword && errors.confirmPassword) || false
              }
              helperText={
                touched.confirmPassword && errors.confirmPassword
                  ? errors.confirmPassword
                  : null
              }
              type="password"
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
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
