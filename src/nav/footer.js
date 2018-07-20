import React, { Component } from "react";
import "./footer.css"
import heart from '../img/heart.png'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <p> Built with <img src={heart} alt="love" /> & React & Bootstrap & FontAwesome by  &copy; &lt; rb &gt;</p>
            </div>
        );
    }
}

export default Footer;