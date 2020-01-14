import React from 'react'
import { NavLink } from "react-router-dom";

const header = () => {
    return (
        <div className="row">
      <div className="col-3">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
            className="img-fluid"
            alt="Logo"
        />
      </div>
      <div className="col-9">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
              Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    )
}

export default header
