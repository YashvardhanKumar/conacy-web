import { ComponentType } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const withRouter = <P extends object>(Comp: ComponentType<P>) => {
  function ComponentWithRouterProp(props: Omit<P, "router">) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Comp {...(props as P)} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
};
