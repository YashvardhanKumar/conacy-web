"use client";
import AddCircle from "@/public/Icons/AddCircle";
import { useField } from "formik";
import React, { FC } from "react";

type CustomFileFieldProps = {
  label?: string;
  name: string;
  hint?: string;
  type?: string;
  required?: boolean;
  imageUrl?: string;
  content?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
const CustomFileInput: FC<CustomFileFieldProps> = ({
  name,
  label,
  imageUrl,
  content,
  value,
  onChange,
}) => {
  const [field, meta, helpers] = useField(name);
  return (
    <div
      className={`rounded-md border-dashed border-2 m-4 ${
        imageUrl ? "" : " h-64"
      }  w-64 ${
        meta.error && meta.touched
          ? "border-pink-500 invalid:text-pink-600 active:ring-pink-500 focus:border-pink-500 focus:ring-pink-500"
          : ""
      }`}
    >
      <label
        htmlFor="image"
        className={`flex ${
          imageUrl ? "" : "flex-col"
        } items-center justify-center h-full gap-2 p-5 cursor-pointer`}
      >
        <AddCircle className={imageUrl ? "" : "h-20"} />
        <span className={imageUrl ? "" : "font-medium text-xl"}>{label}</span>
        <input
          id="image"
          name={name}
          type="file"
          className="hidden"
          content={content}
          onChange={(d) => {
            if(d.target.files?.length == 0)
                return;
            helpers.setValue(d.target.files![0]);
            if (onChange) onChange!(d);
          }}
        />

        {meta.error && <div className="text-red-700 text-xs">{meta.error}</div>}
      </label>
    </div>
  );
};

export default CustomFileInput;
