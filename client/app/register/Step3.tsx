import Form from "@/app/components/Form";
import CustomDateTimePicker from "@/app/components/inputs/CustomDateTimePicker";
import CustomTextField from "@/app/components/inputs/CustomTextFormInput";
import React, { useEffect, useRef } from "react";
export type StepInput3 = {
  dob: string;
};
const Step3 = () => {
  return (
    <>
      <CustomDateTimePicker
        name="dob"
        // error={errors.username}
        label="Add your Date of Birth"
        required
      />
    </>
  );
};

export default Step3;
