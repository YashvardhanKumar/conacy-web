"use client";
import { useField } from "formik";
import React from "react";
type CustomTextFieldProps = {
  label?: string;
  name: string;
  hint?: string;
  type?: string;
  required?: boolean;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  hint,
  type,
  required,
}) => {
  const [field, meta, helpers] = useField(name);
  return (
    <label htmlFor={name} className="flex flex-col">
      {label && <div className=" text-xs my-1">{label}</div>}
      <input
        type={type}
        name={name}
        placeholder={hint}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        className={`p-2.5 dark:outline-none outline outline-1 focus:outline-[3px] rounded-lg max-xs:text-sm border ${
          meta.error && meta.touched
            ? "border-pink-500 invalid:text-pink-600 active:ring-pink-500 focus:border-pink-500 focus:ring-pink-500"
            : ""
        } bg-gray-100 border-none dark:bg-gray-700`}
        required={required}
      />

      {meta.touched && meta.error && (
        <div className="text-red-700 text-xs mt-1 bg-red-300 py-0.5 px-2 rounded-full">
          {meta.error}
        </div>
      )}
    </label>
  );
};

export default CustomTextField;
