import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

// Yup Validation Schema:
// Will determine the shape of how the form library is going to be saving this information

const registerSchema = yup.object().shape({
  //gives errors for invalid register inputs
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const Form = () => {};

export default Form;
