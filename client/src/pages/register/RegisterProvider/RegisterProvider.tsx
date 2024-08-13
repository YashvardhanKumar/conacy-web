import { createContext, useContext, useState } from "react";
import { graphql } from "../../../gql";
import { FormikHelpers } from "formik";
import { handleSubmitRegister } from "../api";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { parse } from "date-fns";
import Passyup from "yup-password";
import { useQuery } from "@apollo/client";
Passyup(yup);

export const RegisterContext = createContext<RegisterContextProps | undefined>(
  undefined
);

export const useRegisterContext = () => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error(
      `${useRegisterContext.name} must be used within a ${RegisterProvider.name}`
    );
  }
  return context;
};

const RegisterProvider: React.FC<RegisterProps> = ({ children }) => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const initialValues = [
    {
      name: "",
      email: "",
      password: "",
      confPass: "",
    } as RegisterStep1FormProps,
    { username: "" } as RegisterStep2FormProps,
    { dob: "" } as RegisterStep3FormProps,
  ];
  const { data, error } = useQuery(
    graphql(`
      query q4 {
        users {
          id
          email
          username
        }
      }
    `)
  );

  const handleSubmit1 = async (
    values: RegisterStep1FormProps,
    h: FormikHelpers<RegisterStep1FormProps>
  ) => {
    h.setSubmitting(false);
    console.log(error);
    const users = data?.users ?? [];
    for (let u of users) {
      if (u.email == values.email) {
        h.setFieldError("email", "Email already exists");
        return;
      }
    }
    setPage(page + 1);
    Object.keys(initialValues[page + 1]).map((key) =>
      h.setFieldTouched(key, false, false)
    );
  };

  const handleSubmit2 = async (
    values: RegisterStep2FormProps,
    h: FormikHelpers<RegisterStep2FormProps>
  ) => {
    h.setSubmitting(false);
    console.log(error);

    const users = data?.users ?? [];

    for (let u of users) {
      if (u.username == values.username) {
        h.setFieldError("username", "Username already exists");
        return;
      }
    }
    setPage(page + 1);
    Object.keys(initialValues[page + 1]).map((key) =>
      h.setFieldTouched(key, false, false)
    );
  };

  const handleSubmit3 = async (
    values: RegisterStep3FormProps,
    h: FormikHelpers<RegisterStep3FormProps>
  ) => {
    h.setSubmitting(false);
    setLoading(true);
    console.log(error);
    const data = await handleSubmitRegister(values);
    setLoading(false);
    if (data.isAuthenticated) {
      nav("/");
    } else {
      alert(data.error);
    }
  };

  const validationSchema1 = {
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
  };

  const validationSchema2 = {
    username: yup
      .string()
      .required("Username is required")
      .matches(
        /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/,
        "Invalid Username"
      ),
  };
  const validationSchema3 = {
    dob: yup
      .date()
      .transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        const result = parse(originalValue, "dd / MM / yyyy", new Date());
        return result;
      })
      .typeError("Please enter a valid date")
      .required(),
  };

  return (
    <RegisterContext.Provider
      value={{
        initialValues: [
          {
            name: "",
            email: "",
            password: "",
            confPass: "",
          } as RegisterStep1FormProps,
          { username: "" } as RegisterStep2FormProps,
          { dob: "" } as RegisterStep3FormProps,
        ],
        validationSchema: [
          validationSchema1,
          validationSchema2,
          validationSchema3,
        ],
        handleSubmit: [handleSubmit1, handleSubmit2, handleSubmit3],
        loading,
        page,
      }}
      children={children}
    />
  );
};

export default RegisterProvider;
