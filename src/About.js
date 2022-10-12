import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const About = () => {
  return (
    <div>
      <center>
        <h3>Welcome to About page</h3>
        <Link className="Link" to="/">
          Go back to Home
        </Link>
      </center>
    </div>
  );
};

export default About;
