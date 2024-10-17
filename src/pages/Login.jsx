import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./login.css"; // Ensure this path is correct

import authHook from "../AuthHook";
function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const { saveAuth, saveAdmin, isAdmin } = authHook();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5055/loginUser", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!data.status) {
      alert("Login failed");
      return;
    }

    saveAuth(true); // Save auth status
    saveAdmin(data.role === "admin");

    navigate(isAdmin ? "/damin/Dashboard" : "/user/Dashboard");

    setFormData({ username: "", password: "" });
  }

  return (
    <div className="login-container">
      <h2>User Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
