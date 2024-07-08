import CustomTextField from "../../../../components/inputs/CustomTextFormInput";

export type StepInput1 = {
  name: string;
  email: string;
  password: string;
  confPass: string;
};

const Step1 = () => {
  return (
    <>
      <CustomTextField
        name="name"
        label="Name"
        hint="Enter Name"
        type="name"
        required
      />
      <CustomTextField
        name="email"
        label="Email"
        hint="Enter Email"
        type="email"
        required
      />
      <CustomTextField
        name="password"
        label="Password"
        hint="Choose Password"
        type="password"
        required
      />
      <CustomTextField
        name="confPass"
        label="Confirm"
        hint="Confirm Password"
        type="password"
        required
      />
      
    </>
  );
};

export default Step1;
