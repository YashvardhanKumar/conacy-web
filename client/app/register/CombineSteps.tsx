"use client";
import React, { useEffect, useState } from "react";
// import RegisterForm1 from "./steps/RegisterForm1";
// import RegisterForm2 from "./steps/RegisterForm2";
// import RegisterForm3 from "./steps/RegisterForm3";
import logo from "@/public/conacylogo.svg";
import StepsTracker from "./StepsTracker";
import Link from "next/link";
import Image from "next/image";
import Step1 from "./Step1";
import Form from "../components/Form";
import FormRegister from "./FormRegister";
import { step1Model } from "./step model/Step1Model";
import { step2Model } from "./step model/Step2Model";
import { step3Model } from "./step model/Step3Model";
import { useRouter } from "next/navigation";
import { usePageChange } from "@/contextAPI/PageContext";
import { gql, useMutation } from "@apollo/client";
import { CREATE_USERS } from "@/gql/mutations/users.mutation";
import { v4 as uuidv4 } from "uuid";
import { cookies } from "next/headers";
import axios from "axios";
import { handleSubmitRegister } from "./submitActions";

const CombineSteps = () => {
  const { page } = usePageChange();
  const router = useRouter();
  const [createUsers, { data, loading, error }] = useMutation(CREATE_USERS);

  const stepsTitle = ["Details", "Choose Username", "Date of Birth"];
  
  // 'use server'
  // const handleSubmit = async (value: any) => {
  //   const url = process.env.NEXT_PUBLIC_SERVER_URL;
  //   console.log(url);

  //   const { email, password, name, username, dob } = value;
  //   const date = new Date(dob);
  //   const id = uuidv4();
  //   alert("SUBMITTED FORM \n" + JSON.stringify(value, null, 2));
  //   if (url) {
  //     const res = await fetch(`${url}/auth/signUp`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         id,
  //         email,
  //         hash: password,
  //         name,
  //         username,
  //         dob: date,
  //       }),
  //     });
  //     console.log(await res.json());
  //     const result = await res.json();
  //     cookies()
  //       .set("accessToken", result.accessToken)
  //       .set("refreshToken", result.refreshToken);
  //   }
  //   // router.push("/");
  // };

  return (
    <div className="card-body flex sm:flex-row md:gap-5">
      <div className="flex flex-col sm:p-5">
        <div className="text-3xl font-semibold max-sm:text-2xl inline-flex items-center gap-1">
          <Link href={"/"}>
            <Image src={logo} alt="" className="h-10 w-10" />
          </Link>
          <div className="w-[1px] h-10 dark:bg-white bg-black"></div>
          <div>Register</div>
        </div>
        <StepsTracker steps={stepsTitle} page={page} />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <FormRegister
          initialValues={[
            step1Model.initialValues,
            step2Model.initialValues,
            step3Model.initialValues,
          ]}
          formComponents={[
            step1Model.component,
            step2Model.component,
            step3Model.component,
          ]}
          handleSubmit={handleSubmitRegister}
          validationSchemas={[
            step1Model.validationSchema,
            step2Model.validationSchema,
            step3Model.validationSchema,
          ]}
          stepsTitle={stepsTitle}
        />
        {page == 0 && (
          <>
            <div className="flex flex-col items-stretch">
              <div className="flex items-center">
                <div className="h-[0.5px] w-full flex-1 dark:bg-white bg-black"></div>
                <div className="p-2.5">or</div>
                <div className="h-[0.5px] w-full flex-1 dark:bg-white bg-black"></div>
              </div>
            </div>
            <Link
              href={"/login"}
              className="btn btn-oulined btn-block border-2 dark:border-[#4A67CB] dark:text-[#4A67CB] border-[#7b94eb] text-[#7b94eb]"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CombineSteps;
