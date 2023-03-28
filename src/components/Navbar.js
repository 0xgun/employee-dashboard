import React from "react";

import { NavLink } from "react-router-dom";
// import { useState } from "react";
export default function Navbar() {
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/Table">
            Employee Dashboard
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto ">
              <li className="nav-item alig">
                <NavLink
                  className="nav-link active align-content-center"
                  aria-current="page"
                  to="/Table"
                  float-right="true"
                >
                  Table
                </NavLink>
              </li>
              <li className="nav-item alig">
                <NavLink
                  className="nav-link active align-content-center"
                  aria-current="page"
                  to="/Dashboard"
                  float-right="true"
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"

              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
