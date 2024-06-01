"use client";
import { useField } from "formik";
import React, { useEffect, useState } from "react";
type CustomDateTimePickerProps = {
  label?: string;
  name: string;
  hint?: string;
  type?: string;
  error?: string;
  required?: boolean;
  //   value?: string | number | readonly string[];
};

const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({
  label,
  name,
  hint,
  required,
  //   value,
}) => {
  const [field, meta, helpers] = useField(name);
  const [date, setDate] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    console.log(field.value);
    var input = e.target.value;
    if (/\D\/$/.test(input)) input = input.slice(0, input.length - 3);
    console.log(input);

    var values = input.split("/").map(function (v) {
      return v.replace(/\D/g, "");
    });
    if (values[0]) values[0] = checkValue(values[0], 31);
    if (values[1] && values[0]) {
      values[1] = checkValue(values[1], 12);
      let month31 = [1, 3, 5, 7, 8, 10, 12];
      if (!month31.find((v) => v == Number(values[1]).valueOf())) {
        if (parseInt(values[1]) == 2) values[0] = checkValue(values[0], 29);
        else values[0] = checkValue(values[0], 30);
      } else {
        values[0] = checkValue(values[0], 31);
      }
    }
    console.log(values);

    if (values[2] && values[2].length == 4) {
      if (Number(values[1]).valueOf() == 2) {
        if (Number(values[0]) > 28 && Number(values[2]) % 4) {
          values[0] = checkValue(values[0], 28);
        }
      }
    }
    var output = values.map(function (v, i) {
      console.log([v, i]);
      return v.length == 2 && i < 2 ? v + " / " : v;
    });
    setDate((d) => output.join("").slice(0, 14));
  };

  const checkValue = (str: string, max: number) => {
    if (str.charAt(0) !== "0" || str == "00") {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0) str = "";
      if (num > max) num = max;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? "0" + num
          : num.toString();
    }
    return str;
  };

  return (
    <label htmlFor={name} className="flex flex-col">
      <div className="text-sm my-1.5">{label}</div>
      <input
        name={name}
        value={date}
        autoComplete="off"
        type="text"
        placeholder={"DD/MM/YYYY"}
        className={`p-3 outline-none rounded-lg border bg-gray-100 border-slate-300 dark:bg-gray-700`}
        onChange={handleChange}
        onBlur={field.onBlur}
        required={required}
      />

      {meta.error && meta.touched && (
        <p className="text-red-700 text-xs mt-1 bg-red-300 py-0.5 px-2 rounded-full">
          {meta.error}
        </p>
      )}
    </label>
  );
};

export default CustomDateTimePicker;
