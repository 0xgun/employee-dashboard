import React from "react";

import { NavLink } from "react-router-dom";
// import { useState } from "react";
export default function Navbar() {
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/Table">
            Employee Management
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/Table"
              >
                Home
              </NavLink>
              <NavLink  className="nav-link active" to="/Dashboard">
                Dashboard
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
