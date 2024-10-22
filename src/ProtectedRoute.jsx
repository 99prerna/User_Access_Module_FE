import { Navigate, Outlet } from "react-router-dom";
import authHook from "./AuthHook";

export const AdminProtectedRoute = () => {
  const { isAuth, isAdmin } = authHook();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  // Check role-based access
  if (!isAdmin) {
    return <Navigate to="/user/Dashboard" />;
  }

  return <Outlet />; // Render the nested routes if authorized
};

export const ProtectedloginRoute = () => {
  const { isAuth, isAdmin } = authHook();

  if (!isAuth) {
    return <Outlet />;
  } else {
    if (!isAdmin) {
      return <Navigate to="/user/Dashboard" />;
    } else {
      return <Navigate to="/admin/Dashboard" />;
    }
  }
};

export const UserProtectedRoute = () => {
  const { isAuth, isAdmin } = authHook();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  // Check role-based access
  if (!isAdmin) {
    return <Outlet />;
  }

  return <Navigate to="/admin/Dashboard" />; // Render the nested routes if authorized
};
