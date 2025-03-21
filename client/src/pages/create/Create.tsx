import { Navigate, useNavigate } from "react-router-dom";
import CreateForm from "./CreateForm";
import { CreatePostProvider } from "./CreatePostProvider/CreatePostProvider";
import { useEffect } from "react";
import useTitle from "../../hooks/useTitle";

const Create = () => {
  useTitle("Create | Conacy");

  const nav = useNavigate();

  useEffect(() => {
    if (localStorage?.getItem("isAuthenticated") != "Yes") {
      nav("/");
    }
  })
  return (
    <CreatePostProvider>
      <div className="h-screen flex flex-col items-center justify-center">
        <div></div>
        <CreateForm />
      </div>
    </CreatePostProvider>
  );
};

export default Create;
