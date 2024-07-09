import CombineSteps from "./components/CombineSteps";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RegisterProvider from "./RegisterProvider/RegisterProvider";

const RegisterPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") == "Yes") {
      navigate("/");
    }
  });
  return (
    <div className="flex max-lg:flex-col items-center justify-center h-screen p-2.5 min-h-screen">
      <div className=" animate-pulse h-[450px] sm:w-[450px] w-screen absolute bg-web-color blur-3xl"></div>
      <div className=" animate-pulse h-10 w-10 absolute left-0 top-0 z-10 bg-orange-500 blur-3xl"></div>
      <div className="card flex bg-base-200 shadow-xl sm:w-[600px] w-[90vw] relative">
        <RegisterProvider>
            <CombineSteps />
        </RegisterProvider>
      </div>
    </div>
  );
};

export default RegisterPage;
