import { Navigate } from "react-router-dom";
import CreateForm from "./CreateForm";

const Create = () => {
  
  if(localStorage?.getItem("isAuthenticated") != "Yes") {
    return <Navigate to={'/'}/>
  }
  return (
    <div className="h-screen flex flex-col items-center max-md:my-16 justify-center">
      <div></div>
      <CreateForm/>
    </div>
  );
};

export default Create;
