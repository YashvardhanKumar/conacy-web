import Step1 from "../components/steps/Step1";
import * as yup from "yup";
import Passyup from "yup-password";
Passyup(yup);

export const step1Model = {
  component: Step1,
  validationSchema: {
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email Not Valid"),
    password: yup
      .string()
      .required("Password is required")
      .password()
      .min(8, "Password must be at least 8 characters")
      .minLowercase(1, "Password must contain at least 1 lowercase")
      .minUppercase(1, "Password must contain at least 1 uppercase")
      .minNumbers(1, "Password must contain at least 1 number")
      .minSymbols(1, "Password must contain at least 1 symbol"),
    confPass: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  },
  initialValues: {
    name: "",
    email: "",
    password: "",
    confPass: "",
  },
};
