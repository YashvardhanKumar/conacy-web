"use client";
import AddCircle from "@/public/Icons/AddCircle";
import { Form, Formik, useField } from "formik";
import { Metadata } from "next";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { text } from "stream/consumers";
import * as yup from "yup";
import CustomTextArea from "../components/inputs/CustomTextAreaInput";

const Create = () => {
  const [image, setImage] = useState<File | undefined>();
  const [caption, setCaption] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const file = e.target.files;
    console.log(file![0]);
    if (file) {
      setImage(file![0]);
      URL.revokeObjectURL(URL.createObjectURL(file![0]));
      setImageUrl(URL.createObjectURL(file![0]));
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div></div>
      <Formik
        initialValues={{
          caption: "",
          image: undefined,
        }}
        validationSchema={yup.object().shape({
          caption: yup
            .string()
            .max(1000, "Your caption should not exceed 1000 characters"),
        })}
        onSubmit={(values, { setSubmitting, setFieldTouched }) => {
          setSubmitting(false);
          // handleSubmit(values);
        }}
      >
        <Form
          noValidate
          method="POST"
          className="py-5 flex flex-col gap-3 items-center w-96 justify-center"
        >
          {image && (
            <div className="p-5">
              <img src={imageUrl} alt="" className="h-72" />
            </div>
          )}
          <div
            className={`rounded-md border-dashed border-2 m-4 ${
              imageUrl ? "" : " h-64"
            }  w-64`}
          >
            <label
              htmlFor="image"
              className={`flex ${
                imageUrl ? "" : "flex-col"
              } items-center justify-center h-full gap-2 p-5 cursor-pointer`}
            >
              <AddCircle className={imageUrl ? "" : "h-20"} />
              <span className={imageUrl ? "" : "font-medium text-xl"}>
                {imageUrl ? "Select other image" : "Upload image"}
              </span>
              <input
                id="image"
                type="file"
                className="hidden"
                content="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <CustomTextArea name="caption" hint="Write Caption Here" />
          <button
            className="btn btn-block dark:bg-web-color bg-web-color-2 mt-3 hover:dark:bg-web-color-2 border-none text-white"
            type={"submit"}
          >
            Post Now
          </button>
        </Form>
      </Formik>
      {/* <form
        action="/create/post"
        method="post"
        className="py-5 flex flex-col gap-3 items-stretch w-96"
      >
        <div className="border rounded-lg flex flex-col p-2">
          <textarea
            name=""
            id=""
            rows={8}
            placeholder="Write Caption Here"
            className="placeholder:text-gray-400 outline-none max-xs:text-sm resize-none"
          ></textarea>
          <div className=" text-gray-400 text-sm self-end">100/1000</div>
        </div>
        <button
          className="btn btn-block dark:bg-web-color bg-web-color-2 mt-3 hover:dark:bg-web-color-2 border-none text-white"
          type="submit"
        >
          Post Now
        </button>
        <input
          type="text"
          placeholder=""
          className="p-2 placeholder:text-gray-400 outline-none rounded-lg max-xs:text-sm border resize-none"
        />

        <div
        key={"textarea"}
          aria-label="Write a caption..."
          className="xw2csxc x1odjw0f x1n2onr6 x1hnll1o xpqswwc xl565be x5dp1im xdj266r x11i5rnm xat24cr x1mh8g0r x1w2wdq1 xen30ot x1swvt13 x1pi30zi xh8yej3 x5n08af notranslate"
          contentEditable={true}
          role="textbox"
          spellCheck="true"
          tabIndex={0}
          data-lexical-editor="true"
          style={{userSelect: "text", whiteSpace: "pre-wrap", wordBreak: "break-word"}}
        >
          <p className="xdj266r x11i5rnm xat24cr x1mh8g0r">
            <br />
          </p>
        </div>{" "}
      </form> */}
    </div>
  );
};

export default Create;
