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
      <header className="admin-header pt-4 d-flex justify-content-around align-items-center">
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li>
              <Link className="btn btn-secondry" to="/admin/users">Manage Users</Link>
            </li>
            <li>
              <Link className="btn btn-secondry" to="/admin/reports">Reports</Link>
            </li>
            <li>
              <Link className="btn btn-secondry" to="/admin/settings">Settings</Link>
            </li>
            </ul>
        </nav>
        <div className="col-1"></div>
        <nav>   
          <ul>
          <li>
              <Link className="btn btn-secondry" to="/admin/register">New User</Link>
            </li>
            <li>
              <Link className="btn btn-secondry ml-4" onClick={logoutUser}>Logout</Link>
            </li>
            
          </ul>
        </nav>
      </header>

      <main className="admin-content  mx-5 my-2">
        <section className="welcome-section px-5">
          <h2>Welcome, Admin!</h2>
          <p>
            Here you can manage users, view reports, and configure settings.
          </p>
        </section>

        <section className="mt-5 p-5">
          <div className="row d-flex justify-content-around">
            <div className="col-12 m-5">
              <h2>Stats</h2>
            </div>
            <div className="col-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Total Users</h5>
                  <p class="card-text">154</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Active Users</h5>
                  <p class="card-text">113</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Users for the day</h5>
                  <p class="card-text">64</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
