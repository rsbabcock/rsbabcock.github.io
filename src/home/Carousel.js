import React, { Component } from 'react';
import './carousel.css'
import bootstrap from '../img/bootstrap.jpeg'
import html from '../img/html5.png'
import bulma from '../img/bulma.png'
import css from '../img/css.png'
import grunt from '../img/grunt.png'
import jquery from '../img/jquery.png'
import js from '../img/js.png'
import json from '../img/json.png'
import react from '../img/react.png'



class Carousel extends Component {

  state = {
    js: js,
    html: html,
    jquery: jquery,
    grunt: grunt,
    css: css,
    bootstrap: bootstrap,
    bulma: bulma,
    json: json,
    react: react
  }

  render() {
    return (
      <div>
        <div className="imageContainer">
          <div>
            <img width={300} height={300} alt="300x300" src={this.state.js} />
          </div>
          <div>
            <img width={350} height={300} alt="300x300" src={this.state.html} />
          </div>
          <div>
            <img width={700} height={300} alt="300x300" src={this.state.jquery} />
          </div>
          <div>
            <img width={250} height={300} alt="300x300" src={this.state.grunt} />
          </div>
          <div>
            <img width={300} height={300} alt="300x300" src={this.state.css} />
          </div>
          <div>
            <img width={300} height={300} alt="300x300" src={this.state.bootstrap} />
          </div>
          <div>
            <img width={500} height={300} alt="300x300" src={this.state.bulma} />
          </div>
          <div>
            <img width={300} height={300} alt="300x300" src={this.state.json} />
          </div>
          <div>
            <img width={450} height={350} alt="300x300" src={this.state.react} />
          </div>
        </div>
      </div>
    )
  }
}


export default Carousel