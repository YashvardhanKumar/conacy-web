import CustomDateTimePicker from "../../../../components/inputs/CustomDateTimePicker";
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
