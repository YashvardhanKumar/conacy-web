import * as yup from "yup";
import Step2 from "../components/steps/Step2";

export const step2Model = {
  component: Step2,
  validationSchema: {
    username: yup
      .string()
      .required("Username is required")
      .matches(
        /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/,
        "Invalid Username"
      ),
  },
  initialValues: {
    username: "",
  },
};
