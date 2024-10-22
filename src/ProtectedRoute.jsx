import { Navigate, Outlet } from "react-router-dom";
import authHook from "./AuthHook";

const ProtectedRoute = ({ role }) => {
  const { isAuth, isAdmin } = authHook();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  // Check role-based access
  if (role === "admin" && !isAdmin) {
    return <Navigate to="/user/Dashboard" />;
  }

  return <Outlet />; // Render the nested routes if authorized
};

export default ProtectedRoute;
