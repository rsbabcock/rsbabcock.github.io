import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">List of Projects</Link>
                <Link to="/about">About Me</Link>
            </nav>
        );
    }
}

export default NavBar;