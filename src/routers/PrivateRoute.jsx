// src/routes/PrivateRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if(loading) {
    return <div className="min-h-screen flex justify-center items-center w-full">Loading...</div>
  }
  if (!user) {
    return <Navigate to="/authentication" replace />;
  }

  return children;
};

export default PrivateRoute;
