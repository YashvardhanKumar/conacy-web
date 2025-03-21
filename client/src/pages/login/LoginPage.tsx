// import { FormValidationProvider } from "../../lib/provider/FormProvider";
// import CombineSteps from "./CombineSteps";
// import { PageProvider } from "@/lib/provider/PageProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginProvider from "./LoginProvider/LoginProvider";
import LoginFormCard from "./LoginFormCard";
const LoginPage = () => {
  if (localStorage.getItem("isAuthenticated") == "Yes") {
    return <Navigate to={"/" + localStorage.getItem("redirectUrl")}/>;
  }
  return (
    <LoginProvider>
      <div className="flex max-lg:flex-col items-center justify-center py-2.5 min-h-screen">
        <div className=" animate-pulse h-[250px] sm:w-[450px] w-screen absolute bg-web-color blur-3xl"></div>
        <div className=" animate-pulse h-10 w-10 absolute left-0 top-0 z-10 bg-orange-500 blur-3xl"></div>
        <LoginFormCard />
      </div>
    </LoginProvider>
  );
};

export default LoginPage;
