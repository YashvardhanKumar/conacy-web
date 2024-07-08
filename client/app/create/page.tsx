import AddCircle from "@/public/Icons/AddCircle";
import { Form, Formik, useField } from "formik";
import { Metadata } from "next";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { text } from "stream/consumers";
import * as yup from "yup";
import CustomTextArea from "../components/inputs/CustomTextAreaInput";

import CustomFileInput from "../components/inputs/CustomFileInput";
import CreateForm from "./CreateForm";

const Create = () => {
  

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div></div>
      <CreateForm/>
    </div>
  );
};

export default Create;
