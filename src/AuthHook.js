import React, { useState } from "react";

const authHook = () => {
  function getAuth() {
    const token = sessionStorage.getItem("isAuth");
    return token === "true";
  }

  const [isAuth, setAuth] = useState(getAuth());
  // 1. Manage Authentication.
  function saveAuth(isauth) {
    sessionStorage.setItem("isAuth", isauth);
    setAuth(isauth);
  }
  // 2. Manage Role.

  function getAdmin() {
    const token = sessionStorage.getItem("isAdmin");
    return token === "true";
  }
  const [isAdmin, setAdmin] = useState(getAdmin());
  // 1. Manage Authentication.
  function saveAdmin(isadmin) {
    sessionStorage.setItem("isAdmin", isadmin);
    setAdmin(isadmin);
  }

  return { isAuth, saveAuth, isAdmin, saveAdmin };
};

export default authHook;
