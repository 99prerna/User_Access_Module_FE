import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/adminPage/AdminDashboard";
import UserDashboard from "./pages/userPage/UserDashboard";
import {
  AdminProtectedRoute,
  ProtectedloginRoute,
  UserProtectedRoute,
} from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedloginRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin/register" element={<Register />} />
        </Route>

        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin/Dashboard" element={<AdminDashboard />} />
        </Route>

        <Route element={<UserProtectedRoute />}>
          <Route path="/user/Dashboard" element={<UserDashboard />} />
        </Route>

        <Route path="*" element={<div>This page does not exist!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminDashboard from "./pages/adminPage/AdminDashboard";
// import UserDashboard from "./pages/userPage/UserDashboard";
// import ProtectedRoute from "./ProtectedRoute";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import {
//   createBrowserRouter,
//   Routes,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <HomePage />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/admin/register",
//       element: <Register />,
//     },
//     {
//       path: "/admin/Dashboard",
//       element: <AdminDashboard />,
//     },
//     {
//       path: "/user/Dashboard",
//       element: <UserDashboard />,
//     },
//     {
//       path: "*",
//       element: <div>This page does not exist!</div>,
//     },
//   ]);
//   return <RouterProvider router={router} />;
// }

// export default App;
