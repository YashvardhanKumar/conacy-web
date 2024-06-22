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
  useEffect(() => {
    console.log(field.value);
    console.log(field.name);
  }, [field.value]);
  return (
    <>
      <label htmlFor={name} className="border self-stretch rounded-lg flex flex-col p-2">
        <textarea
          name={name}
          rows={8}
          value={field.value}
          placeholder={hint}
          className="placeholder:text-gray-400 outline-none max-xs:text-sm resize-none overflow-y-scroll no-scrollbar"
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
        {meta.error && (
        <p className="text-red-700 text-xs">{meta.error}</p>
      )}
      </label>
    </>
  );
};

export default CustomTextArea;
