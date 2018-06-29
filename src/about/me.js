import React, { Component } from "react";
import avatar from '../img/myAvatar.svg'



class Me extends Component {
    render() {
        return (
            <div className="Me">
                <div>
                <img src={avatar} id="avatar"/>
                     {this.props.me.map(me => (
                         <div key={this.props.key}> 
                          <h1> {me.firstName} {me.lastName}</h1>
                          <p> {me.bio} </p>
                          <p> {me.linkedIn} {me.gitHub} </p>
                          </div>
                     ))}
                    </div>
            </div>
        );
    }
}

export default Me;