import React from 'react'
import { NavLink } from "react-router-dom";
export default function editButton(props) {
    var jobid = props.children;
    var link = '/editjob/' + jobid;
    return (
        <NavLink type="button" className="btn btn-success" to={link}>{jobid}</NavLink>
    )
}
