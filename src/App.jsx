import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/adminPage/AdminDashboard";
import UserDashboard from "./pages/userPage/UserDashboard";

import {
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/admin/Dashboard",
      element: <AdminDashboard />,
    },
    {
      path: "/user/Dashboard",
      element: <UserDashboard />,
    },
    {
      path: "*",
      element: <div>This page does not exist!</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
