import Form from "@/app/components/Form";
import CustomTextField from "@/app/components/inputs/CustomTextFormInput";
import React, { useEffect, useRef } from "react";


export type StepInput2 = {
  username: string;
};

const Step2 = () => {
  // const { data, errors, setErrors } = useFormValidation();
  return (
    <CustomTextField
      name="username"
      label="Choose a username (Username can only have lowercase letters, numbers, periods and underscores)"
      hint="Enter a username"
      type="text"
      // validator={InputValidators.usernameValidation}
      required
    />
  );
};

export default Step2;
