import { Form, Formik, FormikValues } from "formik";
import React from "react";

import * as yup from "yup";

type FormLoginProps = {
  validationSchemas: any;
  initialValues: any;
  formComponents: React.FC;

  handleSubmit: (value: FormikValues) => void;
};

const FormLogin: React.FC<FormLoginProps> = ({
  validationSchemas,
  initialValues,
  formComponents,
  handleSubmit,
}) => {
  const FormComp = formComponents;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yup.object().shape(validationSchemas)}
      onSubmit={(values, { setSubmitting, setFieldTouched }) => {
        setSubmitting(false);
        handleSubmit(values);
      }}
    >
      <Form noValidate method="POST">
        <ul className="flex flex-col gap-1">
          {/* <li className=" card-title text-center py-2">Sign In</li> */}
          <div className="h-[0.5px] w-full my-2 dark:bg-white bg-black opacity-20 sm:hidden"></div>
          <FormComp />
          <button
            className="btn btn-block dark:bg-web-color bg-web-color-2 mt-3 hover:dark:bg-web-color-2 border-none text-white"
            type={"submit"}
          >
            Login
          </button>
        </ul>
      </Form>
    </Formik>
  );
};

export default FormLogin;
