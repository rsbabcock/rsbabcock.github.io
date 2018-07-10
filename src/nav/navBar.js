import React, { Component } from "react";
import "./navBar.css"
import star from '../img/star.svg'


class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <div className="first__nav">
                <img src={star} alt="star" title="star"/><a href="#"> rb | 615.967.0606 | rachael.s.babcock@gmail.com</a>
                </div>
                <div className="group__nav">
                    <a href="#skills"> Skills </a>
                    <a href="#projects">  Projects </a>
                    <a href="#about"> About </a>
                </div>
            </div>
        );
    }
}

export default NavBar;