import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">About</Link>
            </nav>
        );
    }
}

export default NavBar;