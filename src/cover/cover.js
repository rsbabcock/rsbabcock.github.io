import React, { Component } from "react";
import avatar from '../img/myAvatar.svg'
import './cover.css'



class Cover extends Component {
    render() {
        return (
            <div className="Cover">
                <div>
                <img src={avatar} class="cover__avatar"/>
                     {this.props.me.map(me => (
                         <div key={this.props.key}> 
                          <h1> {me.quote}</h1>
                          
                          </div>
                     ))}
                    </div>
            </div>
        );
    }
}

export default Cover;