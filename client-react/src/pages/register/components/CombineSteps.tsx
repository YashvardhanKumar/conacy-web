// import RegisterForm1 from "./steps/RegisterForm1";
// import RegisterForm2 from "./steps/RegisterForm2";
// import RegisterForm3 from "./steps/RegisterForm3";
import logo from "../../../assets/conacylogo.svg";
import StepsTracker from "./StepsTracker";

import FormRegister from "./FormRegister";
import { step1Model } from "../step model/Step1Model";
import { step2Model } from "../step model/Step2Model";
import { step3Model } from "../step model/Step3Model";
import { usePageChange } from "../../../contextAPI/PageContext";
import { handleSubmitRegister } from "../api";
import { Link } from "react-router-dom";

const CombineSteps = () => {
  const { page } = usePageChange();

  const stepsTitle = ["Details", "Choose Username", "Date of Birth"];
  
  return (
    <div className="card-body flex sm:flex-row md:gap-5">
      <div className="flex flex-col sm:p-5">
        <div className="text-3xl font-semibold max-sm:text-2xl inline-flex items-center gap-1">
          <Link to={"/"}>
            <img src={logo} alt="" className="h-10 w-10" />
          </Link>
          <div className="w-[0.5px] h-7 dark:bg-slate-600 bg-slate-400"></div>
          <div>Register</div>
        </div>
        <StepsTracker steps={stepsTitle} page={page} />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <FormRegister
          initialValues={[
            step1Model.initialValues,
            step2Model.initialValues,
            step3Model.initialValues,
          ]}
          formComponents={[
            step1Model.component,
            step2Model.component,
            step3Model.component,
          ]}
          handleSubmit={handleSubmitRegister}
          validationSchemas={[
            step1Model.validationSchema,
            step2Model.validationSchema,
            step3Model.validationSchema,
          ]}
          stepsTitle={stepsTitle}
        />
        {page == 0 && (
          <>
            <div className="flex flex-col items-stretch">
              <div className="flex items-center">
                <div className="h-[0.5px] w-full flex-1 dark:bg-white bg-black"></div>
                <div className="p-2.5">or</div>
                <div className="h-[0.5px] w-full flex-1 dark:bg-white bg-black"></div>
              </div>
            </div>
            <Link
              to={"/login"}
              className="btn btn-oulined btn-block border-2 dark:border-[#4A67CB] dark:text-[#4A67CB] border-[#7b94eb] text-[#7b94eb]"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CombineSteps;
