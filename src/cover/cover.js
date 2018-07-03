import React, { Component } from "react";
import avatar from '../img/myAvatar.svg'
import './cover.css'
import linkedin from '../img/languages/linkedin.svg'
import gitHub from '../img/languages/github.svg'
import paws from '../img/paws.png'



class Cover extends Component {

    render() {
        return (
            <div>
                <div>
                    {this.props.me.map(me => (
                        <div key={me.id} className="cover_container">
                            <section>
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
                            <section className="links">
                                <p> {me.bio} </p>
                                <img src={paws} alt="paw prints" title="paw prints" />
                            </section>
                          </div>
                            ))}
                            </div>
                            </div>
                )
            }
        }
        
export default Cover;