"use client";
import { useField } from "formik";
import React, { useEffect, useState } from "react";
type CustomTextAreaProps = {
  name: string;
  hint?: string;
  required?: boolean;
};

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  name,
  hint,
  required,
}) => {
  const [field, meta, helpers] = useField(name);
  return (
    <div className=" max-w-96 w-full p-2 flex flex-col gap-1">
      <label
        htmlFor={name}
        className={`border self-stretch rounded-lg flex flex-col p-2 ${
          meta.error && meta.touched
            ? "border-pink-500 invalid:text-pink-600 active:ring-pink-500 focus:border-pink-500 focus:ring-pink-500"
            : ""
        }`}
      >
        <textarea
          name={name}
          rows={8}
          value={field.value}
          placeholder={hint}
          className="placeholder:text-gray-400 bg-transparent outline-none max-xs:text-sm resize-none overflow-y-scroll no-scrollbar"
          onChange={field.onChange}
          required={required}
        />
        <div
          className={` text-gray-400 text-sm self-end ${
            meta.error ? "text-red-700" : ""
          }`}
        >
          {field.value ? field.value.length : 0}/1000
        </div>
      </label>
      {meta.error && (
        <div className="self-start px-1 text-red-700 text-xs">{meta.error}</div>
      )}
    </div>
  );
};

export default CustomTextArea;
