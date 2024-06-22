import * as yup from "yup";
import FormLogin from "./FormLogin";
import LoginComponent from "./LoginComponent";

export const loginModel = {
    component: LoginComponent,
  validationSchema: (_email: string, _password: string) => ({
    email: yup
      .string()
      .required("Email is required")
      .email("Email Not Valid")
      .matches(RegExp(_email)),
    password: yup
      .string()
      .required("Password is required")
      .matches(RegExp(_password)),
  }),
  initialValues: {
    email: "",
    password: "",
  },
};
