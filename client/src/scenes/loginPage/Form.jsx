import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

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

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const navigate = useNavigate();

  const register = async values => {
    try {
      const response = await axios.post("/auth/register", values);
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
};

export default Form;
