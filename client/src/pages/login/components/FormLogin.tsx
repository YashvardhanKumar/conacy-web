import { Form, Formik } from "formik";

import { useLoginContext } from "../LoginProvider/LoginProvider";
import CircularLoader from "../../../components/CircularLoader";
import CustomTextField from "../../../components/inputs/CustomTextFormInput";

const FormLogin = () => {
  const { loading, initialValues, validationSchema, handleSubmit } =
    useLoginContext();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      children={
        <Form
          noValidate
          method="POST"
          children={
            <ul className="flex flex-col gap-1">
              <div className="h-[0.5px] w-full my-2 dark:bg-white bg-black opacity-20 sm:hidden" />
              <CustomTextField
                name="email"
                label="Email"
                hint="Enter Email"
                type="email"
                required
              />
              <CustomTextField
                name="password"
                label="Password"
                hint="Choose Password"
                type="password"
                required
              />
              <button
                className="btn btn-block dark:text-black hover:bg-gray-400 dark:bg-web-color bg-web-color-2 mt-3 border-none text-white"
                type="submit"
                children={loading ? <CircularLoader /> : "Login"}
              />
            </ul>
          }
        />
      }
    />
  );
};

export default FormLogin;
