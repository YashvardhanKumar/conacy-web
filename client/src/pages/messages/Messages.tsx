import { Navigate, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useEffect } from "react";

const Messages = () => {
  useTitle("Messages | Conacy");
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage?.getItem("isAuthenticated") != "Yes") {
      nav("/");
    }
  })
  return (
    <div className="md:ml-20 max-md:my-16">MessagesPage</div>
    // TODO:
  );
};

export default Messages;
