import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css"


class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <h1> Rachael Babcock </h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">List of Projects</Link>
                <Link to="/about">About Me</Link>
            </nav>
            </div>
        );
    }
}

export default NavBar;