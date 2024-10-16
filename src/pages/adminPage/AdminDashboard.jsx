import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css"; // Optional CSS file for styling

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li>
              <Link to="/admin/users">Manage Users</Link>
            </li>
            <li>
              <Link to="/admin/reports">Reports</Link>
            </li>
            <li>
              <Link to="/admin/settings">Settings</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="admin-content">
        <section className="welcome-section">
          <h2>Welcome, Admin!</h2>
          <p>
            Here you can manage users, view reports, and configure settings.
          </p>
        </section>

        <section className="stats-section">
          <h2>Statistics</h2>
          <div className="stats">
            <div className="stat-card">
              <h3>Total Users</h3>
              <p>150</p> {/* Replace with dynamic data */}
            </div>
            <div className="stat-card">
              <h3>Active Users</h3>
              <p>120</p> {/* Replace with dynamic data */}
            </div>
            <div className="stat-card">
              <h3>New Sign-ups Today</h3>
              <p>5</p> {/* Replace with dynamic data */}
            </div>
          </div>
        </section>

        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>User "johndoe" logged in</li>
            <li>User "janedoe" updated profile</li>
            <li>User "admin" added a new user</li>
          </ul>
        </section>
      </main>

      <footer className="admin-footer">
        <p>&copy; 2024 User Access Control Module. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
