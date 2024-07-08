import { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const withRouter = (Comp: FC) => {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Comp {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
};
