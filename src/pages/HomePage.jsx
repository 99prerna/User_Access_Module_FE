import React from "react";
import "./homepage.css"; // Your custom CSS file
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <h1 className="title">User Access Control Module</h1>
        <Link to="/login">
          <a href="/login" className="login-button">
            Login
          </a>
        </Link>
      </header>

      {/* Main content */}
      <div className="content">
        <h2>Welcome to the User Access Control Module</h2>
        <p>
          Manage and control user access with ease and security. Our module
          helps you streamline user roles, permissions, and authentication
          seamlessly.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
