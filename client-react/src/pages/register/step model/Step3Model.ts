import * as yup from "yup";
import Step2 from "../components/steps/Step2";
import Step3 from "../components/steps/Step3";

export const step3Model = {
  component: Step3,
  validationSchema: {
    dob: yup
      .date()
      .required("Date of Birth is required")
  },
  initialValues: {
    dob: "",
  },
};
