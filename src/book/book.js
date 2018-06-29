import React, { Component } from "react";
import './book.css'
import avatar from '../img/myAvatar.svg'


class Book extends Component {

    render() {
        return (
            <div className="Book">
                <div>
                <h1> Rachael Babcock </h1>
                <h2> Full Stack Developer </h2>
                <img src={avatar} className="book__avatar" alt="avatar"/>
                </div>
                <div className="lang__container">
                    {this.props.langs.map(lang => (
                        <img src={lang.src} alt={lang.alt} title={lang.title}/>
                    ))}
               <p className="notification"> ...Turn the page...</p>
                </div>
            </div>
        )
    }
}

export default Book;