"use client";
import React, { useState } from "react";
// import { FormValidationProvider } from "../../lib/provider/FormProvider";
// import CombineSteps from "./CombineSteps";
// import { PageProvider } from "@/lib/provider/PageProvider";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/conacylogo.svg";
import Link from "next/link";
import FormLogin from "./FormLogin";
import { loginModel } from "./LoginModel";

const LoginPage = () => {
  const router = useRouter();
  return (
    // <PageProvider>
    // <FormValidationProvider>
    <>
      <div className="flex max-lg:flex-col items-center justify-center h-screen p-2.5 min-h-screen">
        <div className=" animate-pulse h-[250px] w-[450px] absolute bg-web-color blur-3xl"></div>
        <div className=" animate-pulse h-10 w-10 absolute left-0 top-0 z-10 bg-orange-500 blur-3xl"></div>
        <div className="card flex bg-base-200 shadow-xl sm:w-[600px] w-[90vw] relative">
          {/* <PageProvider> */}
          <div className="card-body flex sm:flex-row md:gap-5">
            <div className="flex flex-col sm:p-5">
              <div className="text-3xl font-semibold max-sm:text-2xl inline-flex items-center gap-1">
                <Link href={"/"}>
                  <Image src={logo} alt="" className="h-10 w-10" />
                </Link>
                <div className="w-[1px] h-10 dark:bg-white bg-black"></div>
                <div>Sign In</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <FormLogin
                initialValues={loginModel.initialValues}
                formComponents={loginModel.component}
                handleSubmit={(value) => {
                  alert("SUBMITTED FORM \n" + JSON.stringify(value, null, 2));
                  router.push("/");
                }}
                validationSchemas={loginModel.validationSchema("", "")}
              />

              <div className="flex flex-col items-stretch">
                <div className="flex items-center">
                  <div className="h-[0.5px] w-full flex-1 dark:bg-white bg-black"></div>
                  <div className="p-2.5">or</div>
                  <div className="h-[0.5px] w-full flex-1 dark:bg-white bg-black"></div>
                </div>
              </div>
              <Link
                href={"/register"}
                className="btn btn-oulined btn-block border-2 dark:border-[#4A67CB] dark:text-[#4A67CB] border-[#7b94eb] text-[#7b94eb]"
              >
                Create Account
              </Link>
            </div>
          </div>
          {/* </PageProvider> */}
        </div>
      </div>
      );
    </>
    // </FormValidationProvider>
    // </PageProvider>
  );
};

export default LoginPage;
