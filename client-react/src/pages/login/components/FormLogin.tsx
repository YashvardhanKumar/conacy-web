import { gql, useQuery } from "@apollo/client";
import { Form, Formik, FormikValues } from "formik";
import React, { Dispatch, SetStateAction, useState } from "react";

import * as yup from "yup";
import { useNavigate } from "react-router-dom";

type FormLoginProps = {
  validationSchemas: any;
  initialValues: any;
  formComponents: React.FC;
  setLoading: Dispatch<SetStateAction<boolean>>
  handleSubmit: (value: FormikValues) => Promise<any>;
};

const FormLogin: React.FC<FormLoginProps> = ({
  validationSchemas,
  initialValues,
  formComponents,
  handleSubmit,
  setLoading
}) => {
  const FormComp = formComponents;
  const nav = useNavigate();

  const { data } = useQuery(gql`
    query q1 {
      users {
        id
        email
        username
      }
    }
  `);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yup.object().shape(validationSchemas)}
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        setLoading(true);
        try {
          setSubmitting(false);

          const { users } = data;
          // console.log(users);

          for (let u of users) {
            if (u.email == values.email) {
              let data = await handleSubmit(values);
              // console.log(data);
              setLoading(false);

              if (!data?.isAuthenticated) {
                alert(data.error);
              } else {
                nav('/');
              }
              return;
            }
          }
          setLoading(false);
          setFieldError("email", "User not found");
        } catch (error) {
          setLoading(false);
          console.error(error);
        }
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
            onClick={(e) => {
              console.log("clicked", e.detail);
            }}
          >
            Login
          </button>
        </ul>
      </Form>
    </Formik>
  );
};

export default FormLogin;
