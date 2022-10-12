import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Dashboard = () => {
  return (
    <div>
      <center>
        <h3>Welcome to Dashboard page</h3>
        <Link to="/" className="Link">
          GO back to Home page
        </Link>
      </center>
    </div>
  );
};

export default Dashboard;
