import { createContext, useContext, useState } from "react";
import * as yup from "yup";
import { FormikHelpers } from "formik";
import { handleSubmitLogin } from "@apis/submitActions";
import { useNavigate } from "react-router-dom";
/**
 * Custom hook for Post Context
 */

export const LoginContext = createContext<LoginContextProps | undefined>(
  undefined
);

/**
 * Custom hook for Post Context
 */

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error(
      `${useLoginContext.name} must be used within a ${LoginProvider.name}`
    );
  }
  return context;
};

/**
 * Login Component
 */

const LoginProvider: React.FC<LoginProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email Not Valid"),
    password: yup.string().required("Password is required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = async (
    values: LoginFormProps,
    h: FormikHelpers<LoginFormProps>
  ) => {
    setLoading(true);
    try {
      h.setSubmitting(false);

      const data = await handleSubmitLogin(values);
      setLoading(false);

      if (!data?.isAuthenticated) {
        console.log(data);
        h.setFieldError("email", data?.message || "Invalid email or password");
        return;
      } else {
        nav("/" + localStorage.getItem("redirectUrl"));
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      h.setFieldError("email", "An unexpected error occurred");
    }
  };
  return (
    <LoginContext.Provider
      value={{
        initialValues,
        loading,
        setLoading,
        handleSubmit,
        validationSchema,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
