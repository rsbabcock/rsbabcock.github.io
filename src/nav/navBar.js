import React, { Component } from "react";
import "./navBar.css"
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class NavBar extends Component {

    handlePrintPage = (e) => {
        window.print()
    }

    render() {
        return (
            <Navbar fixedTop inverse collapseOnSelect id="nav__bar" >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#" id="page__book" onClick={this.props.showView}> &lt; rb &gt; </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav className="navBar">
                        <NavItem eventKey={1} href="#skills">
                            <p id="nav__skills" onClick={this.props.showView}> Skills </p>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <p id="nav__projects" onClick={this.props.showView}>  Projects </p>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <p id="nav__about" onClick={this.props.showView}> About </p>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <p id="nav__favs" onClick={this.props.showView}> Favorites </p>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;