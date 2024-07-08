import CustomTextField from "../../../components/inputs/CustomTextFormInput";

const LoginComponent = () => {
  return (
    <>
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
    </>
  );
};

export default LoginComponent;
