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
      <header className="admin-header pt-4 d-flex justify-content-around align-items-center">
        <h1>User Dashboard</h1>
        <div className="col-1"></div>
        <nav>   
          <ul>
            <li>
              <Link className="btn btn-secondry ml-4" onClick={logoutUser}>Logout</Link>
            </li>
            
          </ul>
        </nav>
      </header>



      <main className="user-content mx-5 my-2 p-5">
      <section className="welcome-section px-5">
          <h2>Welcome, User!</h2>
          <p>
            This is your dashboard where you can manage your profile and setting;
          </p>
        </section>

        <section className="mx-5 my-2 py-5">
          <h2>Profile</h2>
          div.
            <ul class="list-group list-group-flush">
              <li class="list-group-item">User Activity</li>
              <li class="list-group-item">Sigun work</li>
              <li class="list-group-item">Login one Logs</li>
              <li class="list-group-item"> item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
