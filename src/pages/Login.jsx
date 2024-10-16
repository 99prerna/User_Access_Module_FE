import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./login.css"; // Ensure this path is correct

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5055/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("Response Data:", data);

    if (data.success) {
      console.log("Redirecting to:", data.redirectUrl);
      navigate(data.redirectUrl); // Redirect to the dashboard
    } else {
      // Handle the error (e.g., show an error message)
      alert(data.message);
    }

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
