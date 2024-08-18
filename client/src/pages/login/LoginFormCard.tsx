import { Link } from "react-router-dom";
import logo from "../../assets/conacylogo.svg";
import FormLogin from "./components/FormLogin";

const LoginFormCard = () => {
  return (
    <div
      className="card flex bg-base-200 shadow-xl sm:w-[600px] w-[90vw] relative"
      children={
        <div className="card-body flex sm:flex-row md:gap-5">
          <div
            className="flex flex-col sm:p-5"
            children={
              <div className="text-3xl font-semibold max-sm:text-2xl inline-flex items-center gap-1.5">
                <Link
                  to={"/"}
                  children={<img src={logo} alt="" className="h-10 w-10" />}
                />
                <div className="w-[0.5px] h-7 dark:bg-slate-600 bg-slate-400" />
                <div children="Sign In" />
              </div>
            }
          />
          <div className="flex flex-col gap-2 flex-1">
            <FormLogin />
            <div
              className="flex flex-col items-stretch"
              children={
                <div className="flex items-center">
                  <div className="h-[0.5px] w-full flex-1 dark:bg-white bg-black"></div>
                  <div className="p-2.5">or</div>
                  <div className="h-[0.5px] w-full flex-1 dark:bg-white bg-black"></div>
                </div>
              }
            />
            <Link
              to={"/register"}
              className="btn btn-oulined btn-block border-2 dark:border-white dark:text-white border-black text-black"
              children="Create Account"
            />
          </div>
        </div>
      }
    />
  );
};
export default LoginFormCard;
