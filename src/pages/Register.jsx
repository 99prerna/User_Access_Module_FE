import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Assuming a CSS file similar to Login.css

const apiUrl = import.meta.env.VITE_API_URL;

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    role: "user",
    mail: "",
    createdBy: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.firstName.trim()) formErrors.firstName = "First Name is required.";
    if (!formData.username.trim()) formErrors.username = "Username is required.";
    if (!formData.password.trim()) formErrors.password = "Password is required.";
    if (!formData.role) formErrors.role = "Role is required.";
    if (!formData.mail.trim()) {
      formErrors.mail = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.mail)) {
      formErrors.mail = "Enter a valid email address.";
    }
    if (!formData.createdBy.trim()) formErrors.createdBy = "Created By field is required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleBack = () => {
    navigate("/admin/dashboard");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    const response = await fetch('http://3.23.105.251:5055/registerUser', {
    // const response = await fetch(`${apiUrl}/registerUser`, {
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
      role: "user",
      mail: "",
      createdBy: "",
    });
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ marginTop: '60px', width: '100vw' }}>
      <div className="mb-5 border rounded-2 p-4 bg-light w-50">
        <div className="mb-4">
          <p className="fw-light text-secondary mb-0 fs-6">Create your account,</p>
          <h2 className="display-5 fw-light" style={{ marginTop: -10 }}>Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="text-secondary fs-6 fw-light">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
          </div>
          <div className="mb-3">
            <label className="text-secondary fs-6 fw-light">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
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
            {errors.username && <small className="text-danger">{errors.username}</small>}
          </div>
          <div className="mb-3">
            <label className="text-secondary fs-6 fw-light">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>
          <div className="mb-3">
            <label className="text-secondary fs-6 fw-light">Role</label>
            <select
              name="role"
              className="form-select"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {errors.role && <small className="text-danger">{errors.role}</small>}
          </div>
          <div className="mb-3">
            <label className="text-secondary fs-6 fw-light">Mailing Address</label>
            <input
              type="email"
              name="mail"
              className="form-control"
              placeholder="Mailing Address"
              value={formData.mail}
              onChange={handleChange}
              required
            />
            {errors.mail && <small className="text-danger">{errors.mail}</small>}
          </div>
          <div className="mb-3">
            <label className="text-secondary fs-6 fw-light">Created By</label>
            <input
              type="text"
              name="createdBy"
              className="form-control"
              placeholder="Created By"
              value={formData.createdBy}
              onChange={handleChange}
              required
            />
            {errors.createdBy && <small className="text-danger">{errors.createdBy}</small>}
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-secondary rounded-pill px-4 fw-light" onClick={handleBack}>
              Back
            </button>
            <button type="submit" className="btn btn-primary rounded-pill px-4 fw-light">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
