import React, { Component } from "react";
import "./navBar.css"
// from bootstrap
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class NavBar extends Component {

    handlePrintPage = (e) => {
        window.print()
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand" id="page__book" onClick={this.props.showView}> R . B</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav className="navBar">
                        <NavItem eventKey={1} href="#skills">
                            <a id="nav__skills" onClick={this.props.showView}> Skills </a>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <a id="nav__projects" onClick={this.props.showView}>  Projects </a>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <a id="nav__about" onClick={this.props.showView}> About </a>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <a id="nav__favs" onClick={this.props.showView}> Favorites </a>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;