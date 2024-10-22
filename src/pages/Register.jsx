import { useState } from "react";
import "./HomePage.css";

const apiUrl = import.meta.env.VITE_API_URL;

function register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    role: "",
    mail: "",
    createdBy: "",
  });

  const handleChange = (e) => {
    console.log("hello");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const response = await fetch(`${apiUrl}/registerUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);

    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      role: "",
      mail: "",
      createdBy: "",
    });
  }

  return (
    <div>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
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
        <div>
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mailing Address:</label>
          <input
            type="mail"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Created By:</label>
          <input
            type="test"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default register;
