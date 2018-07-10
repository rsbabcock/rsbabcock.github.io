import React, { Component } from "react";
import avatar from '../img/myAvatar.svg'
import './cover.css'
import linkedin from '../img/languages/linkedin.svg'
import gitHub from '../img/languages/github.svg'
import star from '../img/star.svg'



class Cover extends Component {

    render() {
        return (
            <div id="about">
                <div>
                    {this.props.me.map(me => (
                        <div key={me.id} className="cover_container">
                            <section className="intro">
                            <h1> Hi, I'm {me.firstName}</h1>
                                <img src={avatar} id="cover__avatar" alt="avatar" />
                            <h4> {me.quote}!</h4>
                                <a href={me.linkedIn} target="_blank">
                                    <img  src={linkedin} alt={linkedin} />
                                </a>
                                <a href={me.gitHub} target="_blank">
                                    <img  src={gitHub} alt={gitHub} />
                                </a>
                            </section>
                            <section className="bio">
                                <h1> Bio <img src={star} alt="star" title="star"/></h1>
                                <p> {me.bio} </p>
                            </section>
                          </div>
                            ))}
                            </div>
                            </div>
                )
            }
        }
        
export default Cover;