import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Login.css"; // Ensure this path is correct
import authHook from "../AuthHook";

const apiUrl = import.meta.env.VITE_API_URL;

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
    // const response = await fetch("http://18.188.230.42:5055/loginUser", {
    const response = await fetch(`${apiUrl}/loginUser`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      alert("Login failed");
      return;
    }

    saveAuth(true); // Save auth status
    console.log(typeof data.role, data.role);
    saveAdmin(data.role === "admin");
    navigate(data.role === "admin" ? "/admin/Dashboard" : "/user/Dashboard");

    setFormData({ username: "", password: "" });
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: 100+'vh', width: 100+'vw'}}>
      <div className="border rounded-2 p-4 bg-light w-25">
        <div className="mb-4">
          <p className="fw-light text-secondary mb-0 text-xs fs-6">Let's get started,</p>
          <h2 className="display-4 fw-light " style={{marginTop: -10}}>Login.</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-secondary fs-6 fw-light">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="text-secondary fs-6 fw-light">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              requireds
            />
          </div>
          <div className="d-flex justify-content-end align-items-center mt-4"><button type="submit" className="rounded-pill fw-light px-4">Submit</button></div>
        </form>
      </div>
    </div>
  );
}

export default Login;
