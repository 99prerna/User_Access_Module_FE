import React from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css"; // Optional CSS file for styling
import authHook from "../../AuthHook";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const UserDashboard = () => {
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
    <div className="user-dashboard">
      <header className="user-header">
        <h1>User Dashboard</h1>
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <button onClick={logoutUser}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="user-content">
        <section className="welcome-section">
          <h2>Welcome, User!</h2>
          <p>
            This is your dashboard where you can manage your profile and
            settings.
          </p>
        </section>

        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>Updated profile information</li>
            <li>Changed password</li>
            <li>Logged in on October 17, 2024</li>
          </ul>
        </section>
      </main>

      <footer className="user-footer">
        <p>&copy; 2024 User Access Control Module. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserDashboard;
