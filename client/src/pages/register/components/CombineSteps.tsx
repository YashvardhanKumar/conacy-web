// import RegisterForm1 from "./steps/RegisterForm1";
// import RegisterForm2 from "./steps/RegisterForm2";
// import RegisterForm3 from "./steps/RegisterForm3";
import logo from "../../../assets/conacylogo.svg";
import StepsTracker from "./StepsTracker";

import FormRegister from "./FormRegister";
import { Link } from "react-router-dom";
import { useRegisterContext } from "../RegisterProvider/RegisterProvider";

const CombineSteps = () => {
  const { page } = useRegisterContext();

  const stepsTitle = ["Details", "Choose Username", "Date of Birth"];

  return (
    <div className="card-body flex sm:flex-row md:gap-5">
      <div className="flex flex-col sm:p-5">
        <div className="text-3xl font-semibold max-sm:text-2xl inline-flex items-center gap-1">
          <Link
            to={"/"}
            children={<img src={logo} alt="" className="h-10 w-10" />}
          />
          <div className="w-[0.5px] h-7 dark:bg-slate-600 bg-slate-400" />
          <div children="Register" />
        </div>
        <StepsTracker steps={stepsTitle} page={page} />
      </div>
      <div className="flex flex-col gap-2 flex-1" children={<FormRegister />} />
    </div>
  );
};

export default CombineSteps;
