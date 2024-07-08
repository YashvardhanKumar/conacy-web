import { gql, useQuery } from "@apollo/client";
import { Form, Formik, FormikValues } from "formik";
import React from "react";

import * as yup from "yup";
import { handleSubmitLogin } from "../api/submitActions";
import { useRouter } from "next/navigation";

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
}) => {
  const router = useRouter();
  const FormComp = formComponents;
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
        try {
          setSubmitting(false);

          const { users } = data;
          console.log(users);

          for (let u of users) {
            if (u.email == values.email) {
              let err = await handleSubmitLogin(values);
              console.log(err);

              if (err) {
                setFieldError("password", err);
              }
              return;
            }
          }
          setFieldError("email", "User not found");
        } catch (error) {
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
