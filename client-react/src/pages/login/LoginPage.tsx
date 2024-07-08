// import { FormValidationProvider } from "../../lib/provider/FormProvider";
// import CombineSteps from "./CombineSteps";
// import { PageProvider } from "@/lib/provider/PageProvider";
import logo from "../../assets/conacylogo.svg";
import FormLogin from "./components/FormLogin";
import { loginModel } from "./LoginModel";
import { handleSubmitLogin } from "../../apis/submitActions";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingLogo from "../../components/LoadingLogo";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if(localStorage.getItem("isAuthenticated") == "Yes") {
      navigate('/');
    }
  });
  return (
    <>
    {loading && <LoadingLogo/>}
    <div className="flex max-lg:flex-col items-center justify-center py-2.5 min-h-screen">
      <div className=" animate-pulse h-[250px] sm:w-[450px] w-screen absolute bg-web-color blur-3xl"></div>
      <div className=" animate-pulse h-10 w-10 absolute left-0 top-0 z-10 bg-orange-500 blur-3xl"></div>
      <div className="card flex bg-base-200 shadow-xl sm:w-[600px] w-[90vw] relative">
        {/* <PageProvider> */}
        <div className="card-body flex sm:flex-row md:gap-5">
          <div className="flex flex-col sm:p-5">
            <div className="text-3xl font-semibold max-sm:text-2xl inline-flex items-center gap-1.5">
              <Link to={'/'}>
                <img src={logo} alt="" className="h-10 w-10" />
              </Link>
              <div className="w-[0.5px] h-7 dark:bg-slate-600 bg-slate-400"></div>
              <div>Sign In</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <FormLogin
              initialValues={loginModel.initialValues}
              formComponents={loginModel.component}
              handleSubmit={handleSubmitLogin}
              validationSchemas={loginModel.validationSchema("", "")}
              setLoading={setLoading}
            />
            <div className="flex flex-col items-stretch">
              <div className="flex items-center">
                <div className="h-[0.5px] w-full flex-1 dark:bg-white bg-black"></div>
                <div className="p-2.5">or</div>
                <div className="h-[0.5px] w-full flex-1 dark:bg-white bg-black"></div>
              </div>
            </div>
            <Link
              to={"/register"}
              className="btn btn-oulined btn-block border-2 dark:border-[#4A67CB] dark:text-[#4A67CB] border-[#7b94eb] text-[#7b94eb]"
            >
              Create Account
            </Link>
          </div>
        </div>
        {/* </PageProvider> */}
      </div>
    </div>
    </>
  );
};

export default LoginPage;
