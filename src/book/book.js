import React, { Component } from "react";
import './book.css'
import avatar from '../img/myAvatar.svg'
import linkedin from '../img/languages/linkedin.svg'
import gitHub from '../img/languages/github.svg'


class Book extends Component {
    uniqueKey = 1
    render() {
        return (
            <div className="Book">
                <div className="first__page">
                    <h1> Rachael Babcock </h1>
                    <h2> Full Stack Developer </h2>
                    <img src={avatar} className="book__avatar" alt="avatar" />
                    {this.props.me.map(me => (
                        <div className="git_links">
                        <a href={me.linkedIn} target="_blank">
                            <img src={linkedin} alt={linkedin} />
                        </a>
                        <a href={me.gitHub} target="_blank">
                            <img src={gitHub} alt={gitHub} />
                        </a>
                        </div>
                    ))}
                </div>
                <div className="lang__container" id="skills">
                    {this.props.langs.map(lang => (
                        <img src={lang.src} key={this.uniqueKey++} alt={lang.alt} title={lang.title} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Book;