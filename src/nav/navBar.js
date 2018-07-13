import React, { Component } from "react";
import "./navBar.css"
import print from '../img/resume/resume.png'
import resume from '../img/resume/RachaelBabcock.png'

class NavBar extends Component {

    handlePrintPage = (e) => {
        window.print()
    }

    render() {
        return (
            <div className="navBar">
                <div className="first__nav">
                    <a href="#"> rb | 615.967.0606 | rachael.s.babcock@gmail.com</a>
                </div>
                <div className="group__nav">
                    <a href="#skills"> Skills </a>
                    <a href="#projects">  Projects </a>
                    <a href="#about"> About </a>
                </div>
                    <a className="print" href={resume} download={resume}><img src={print} alt="print icon" title="press to print" /></a>
            </div>
        );
    }
}

export default NavBar;