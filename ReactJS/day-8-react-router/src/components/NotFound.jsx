import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const NotFound = () => {
  return (
    <div className="component">
      <h1>Not Found</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANQp8KWA_GE8icUW7IWsOIDV8Z9zABH6NmA&s"
        alt="Not Found"
        className="icons"
      />
      <button>
        <Link to="/" className="link-btn">
          Return to Home
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
