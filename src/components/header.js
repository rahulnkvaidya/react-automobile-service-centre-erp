import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const header = () => {
    return (
      <div className="row">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark m-0 sticky-top m-2">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
              <FontAwesomeIcon icon="coffee" /> Home
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/joblist">
              Job list
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
              Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newjob">
                New Job
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
        <FontAwesomeIcon icon="coffee" />
      </div>
    )
}

export default header
