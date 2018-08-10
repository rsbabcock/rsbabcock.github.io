import React, { Component } from "react";
import './book.css'
import avatar from '../img/myAvatar.svg'
import linkedin from '../img/languages/linkedin.svg'
import gitHub from '../img/languages/github.svg'
import resume from '../img/resume/RachaelBabcock.pdf'
import twitter from '../img/twitter.svg'
import star from '../img/star.svg'
import ContactModal from './modal'
import {Button} from 'react-bootstrap'


class Book extends Component {
    uniqueKey = 1
    render() {
        return (
            <div className="Book">
                <div className="first__page" id="brand">
                    <h1><img src={star} alt="star" title="star"/>
                     Rachael Babcock <img src={star} alt="star" title="star"/></h1>
                    <h2> Full Stack Developer </h2>
                    <img src={avatar} className="book__avatar" alt="avatar" />
                    {this.props.me.map(me => (
                        <div className="git_links" key={this.uniqueKey++}>
                        <ContactModal/>
                        <a href={me.linkedIn} target="_blank">
                            <img src={linkedin} alt={linkedin} />
                        </a>
                        <a href={me.twitter} target="_blank">
                            <img src={twitter} alt={twitter} />
                        </a>
                        
                        <a href={me.gitHub} target="_blank">
                            <img src={gitHub} alt={gitHub} />
                        </a>
                        <a href={resume} download="RachaelBabcock">
                        <Button bsStyle="info" bsSize="small" id="stupidButton">Resume</Button> 
                        </a>
                        </div>
                    ))}
                </div>
                    <div id="skills">
                    <br/>
                    </div>
                <div className="languages">
                    <h1> Skills </h1>
                <div className="lang__container" id="skills">
                    {this.props.langs.map(lang => (
                        <img src={lang.src} key={this.uniqueKey++} alt={lang.alt} title={lang.title} />
                    ))}
                </div>
                </div>
            </div>
        )
    }
}

export default Book;