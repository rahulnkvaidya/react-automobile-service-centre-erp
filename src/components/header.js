import React from 'react'
import { NavLink } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth, API } from 'aws-amplify';

const header = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
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
          
          <li className="nav-item">
            <a className="nav-link" href="https://www.employmentnewsinindia.com/api/remover" rel="noopener noreferrer" target="_blank">Remover</a>

          </li>
          <li className="nav-item float-right" >
              
             <AmplifySignOut />
          </li>
        </ul>
      </nav>
      
    </div>
  )
}

export default header
