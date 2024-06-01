import { Form, Formik, FormikValues } from "formik";
import React, { ReactElement, useState } from "react";

import * as yup from "yup";
import { usePageChange } from "@/contextAPI/PageContext";

type FormRegisterProps = {
  stepsTitle: string[];
  validationSchemas: any[];
  initialValues: any[];
  formComponents: React.FC[];
  handleSubmit: (value: FormikValues) => void;
};

const FormRegister: React.FC<FormRegisterProps> = ({
  stepsTitle,
  validationSchemas,
  initialValues,
  formComponents,
  handleSubmit,
}) => {
  const { page, setPage } = usePageChange();
  const lastStep = formComponents.length - 1;
  const FormComp = formComponents[page];
  return (
    <Formik
      initialValues={initialValues[page]}
      validationSchema={yup.object().shape(validationSchemas[page])}
      onSubmit={(values, { setSubmitting, setFieldTouched }) => {
        setSubmitting(false);
        if (page === lastStep) {
          handleSubmit(values);
        } else {
          setPage(page + 1);
          Object.keys(initialValues[page + 1]).map((key) =>
            setFieldTouched(key, false, false)
          );
        }
      }}
    >
      <Form noValidate method="POST">
        <ul className="flex flex-col gap-1">
          <li className=" card-title text-center py-2">{stepsTitle[page]}</li>
          <div className="h-[0.5px] w-full dark:bg-white bg-black opacity-20"></div>
          <FormComp />
          <button
            className="btn btn-block dark:bg-web-color bg-web-color-2 mt-3 hover:dark:bg-web-color-2 border-none text-white"
            type={"submit"}
          >
            {page == lastStep ? "Create Account" : "Next"}
          </button>
        </ul>
      </Form>
    </Formik>
  );
};

export default FormRegister;
