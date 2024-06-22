"use client";
import React, { useState } from "react";
// import { FormValidationProvider } from "../../lib/provider/FormProvider";
import CombineSteps from "./CombineSteps";
// import { PageProvider } from "@/lib/provider/PageProvider";
import { useRouter } from "next/navigation";
import { PageProvider } from "@/contextAPI/PageProvider";

const RegisterPage = () => {
  const router = useRouter();
  
  return (
    <div className="flex max-lg:flex-col items-center justify-center h-screen p-2.5 min-h-screen">
      <div className=" animate-pulse h-[450px] w-[450px] absolute bg-web-color blur-3xl"></div>
      <div className=" animate-pulse h-10 w-10 absolute left-0 top-0 z-10 bg-orange-500 blur-3xl"></div>
      <div className="card flex bg-base-200 shadow-xl sm:w-[600px] w-[90vw] relative">
        <PageProvider>
          <CombineSteps />
        </PageProvider>
      </div>
    </div>
  );
};

export default RegisterPage;
