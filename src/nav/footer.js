import React, { Component } from "react";
import "./footer.css"
import heart from '../img/heart.png'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <p> Built with <img src={heart} alt="love" /> boo& React  & FontAwesome by  @Rachael Babcock</p>
            </div>
        );
    }
}

export default Footer;