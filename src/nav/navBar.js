import React, { Component } from "react";
import "./navBar.css"
import print from '../img/resume/resume.png'
import resume from '../img/resume/RachaelBabcock.pdf'

class NavBar extends Component {

    handlePrintPage = (e) => {
        window.print()
    }

    render() {
        return (
            <div className="navBar">
                <div className="first__nav">
                    <a id="page__book" onClick={this.props.showView}> rb | 615.967.0606 | rachael.s.babcock@gmail.com</a>
                </div>
                <div className="group__nav">
                    <a id="nav__skills" onClick={this.props.showView} href="#skills"> Skills </a>
                    <a id="nav__projects" onClick={this.props.showView}>  Projects </a>
                    <a id="nav__about" onClick={this.props.showView}> About </a>
                    <a id="nav__favs" onClick={this.props.showView}> Favs </a>
                </div>
                    <a className="print" href={resume} download="RachaelBabcock"><img src={print} alt="print icon" title="press to print" /></a>
            </div>
        );
    }
}

export default NavBar;