import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css"; // Optional CSS file for styling
import authHook from "../../AuthHook";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const AdminDashboard = () => {
  const { saveAuth, saveAdmin } = authHook();
  const navigator = useNavigate();

  async function logoutUser(e) {
    e.preventDefault();
    const response = await fetch(`${apiUrl}/logout`, {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      saveAuth(false);
      saveAdmin(false);
      navigator("/login");
    }
  }

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
              <Link onClick={logoutUser}>Logout</Link>
            </li>
            <li>
              <Link to="/admin/register">Register</Link>
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

          <Link onClick={logoutUser}>Logout</Link>
          <Link to="/admin/register">Register</Link>
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
