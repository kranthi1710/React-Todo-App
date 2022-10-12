import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <div>
      <center>
        <h3>Welcome to Home page</h3>
        <Link className="Link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="Link" to="/about">
          About
        </Link>
      </center>
    </div>
  );
};

export default Home;
