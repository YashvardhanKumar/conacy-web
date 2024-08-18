import { Form, Formik } from "formik";
import * as yup from "yup";
import { useRegisterContext } from "../RegisterProvider/RegisterProvider";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import { Link } from "react-router-dom";
import CircularLoader from "../../../components/CircularLoader";

const FormRegister = () => {
  const { initialValues, validationSchema, handleSubmit, page, loading } =
    useRegisterContext();
  const stepsTitle = ["Details", "Choose Username", "Date of Birth"];

  return (
    <>
      <Formik
        initialValues={initialValues[page] as any}
        validationSchema={yup.object().shape(validationSchema[page])}
        onSubmit={handleSubmit[page] as any}
        children={
          <Form
            noValidate
            method="POST"
            children={
              <ul className="flex flex-col gap-1">
                <li
                  className=" card-title text-center py-2"
                  children={stepsTitle[page]}
                />
                <div className="h-[0.5px] w-full dark:bg-white bg-black opacity-20" />
                {page == 0 && <Step1 />}
                {page == 1 && <Step2 />}
                {page == 2 && <Step3 />}
                <button
                  className="btn btn-block dark:text-black hover:bg-gray-400 dark:bg-web-color bg-web-color-2 mt-3 border-none text-white"
                  type={"submit"}
                  children={
                    loading ? (
                      <CircularLoader />
                    ) : page == 2 ? (
                      "Create Account"
                    ) : (
                      "Next"
                    )
                  }
                />
              </ul>
            }
          />
        }
      />
      {page == 0 && (
        <>
          <div
            className="flex flex-col items-stretch"
            children={
              <div className="flex items-center">
                <div className="h-[0.5px] w-full flex-1 dark:bg-white bg-black" />
                <div className="p-2.5" children="or" />
                <div className="h-[0.5px] w-full flex-1 dark:bg-white bg-black" />
              </div>
            }
          />
          <Link
            to={"/login"}
            className="btn btn-oulined btn-block border-2 dark:border-white dark:text-white border-black text-black"
            children="Login"
          />
        </>
      )}
    </>
  );
};

export default FormRegister;
