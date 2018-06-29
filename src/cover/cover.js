import React, { Component } from "react";
import avatar from '../img/myAvatar.svg'
import './cover.css'



class Cover extends Component {
    render() {
        return (
            <div className="Cover">
                <div>
                     {this.props.me.map(me => (
                         <div key={me.id}> 
                         <p> Hi, I'm {me.firstName}
                         <img src={avatar} className="cover__avatar" alt="avatar"/>
                         </p>
                          <h1> {me.quote}</h1>
                          </div>
                     ))}
                    </div>
            </div>
        );
    }
}

export default Cover;