import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("accessToken");

  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
