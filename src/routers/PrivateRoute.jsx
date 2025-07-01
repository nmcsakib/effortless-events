import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loading, setLoading, user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && !user) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, [setUser, setLoading, user]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center w-full">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/authentication" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
