import React, { Component } from 'react'
import './App.css'
// import Home from './home/home';
import NavBar from './nav/navBar';
import About from './about/about';
import Home from './home/home'
// import Favs from './favs/favs'
import ProjectList from './projects/ProjectList'

// images 
import aws from './img/languages/aws.svg'
import bootstrap from './img/languages/bootstrap-stack.svg'
import camera from './img/languages/camera.svg'
import codepen from './img/languages/codepen.svg'
import css3 from './img/languages/css3-original.svg'
import finalcut from './img/languages/finalcut.png'
import git from './img/languages/git-square.svg'
import gitHub from './img/languages/github.svg'
import grunt from './img/languages/grunt.svg'
import html5 from './img/languages/html5.svg'
import jquery from './img/languages/jquery-filled.svg'
import js from './img/languages/js-square.svg'
import lightroom from './img/languages/lightroom.png'
import npm from './img/languages/npm.svg'
import ps from './img/languages/ps.svg'
import react from './img/languages/react.svg'
import vscode from './img/languages/vscode.svg'
import python from './img/languages/python.svg'
import django from './img/languages/django-line.svg'
import heroku from './img/languages/heroku-original.svg'
import sqlite from './img/languages/Sqlite-square-icon.png'
import mdown from './img/languages/Markdown-mark.png'
import djangoRest from './img/languages/django_rest.png'
import apigee from './img/languages/apigee.png'
import sass from './img/languages/sass-original.svg'
import node from './img/languages/nodejs-original-wordmark.svg'
import redux from './img/languages/redux.png'
import Footer from './nav/footer'
import GraphicDesign from './graphicDesign/graphicDesign';




// other images
// import linkedin from './img/languages/linkedin.svg'



class App extends Component {

  // Set initial state
  state = {
    currentView: "book",
    me: [
      {
        firstName: "Rachael",
        lastName: "Babcock",
        email: "rachael.s.babcock@gmail.com",
        number: "615-967-0606",
        gitHub: "https://github.com/rsbabcock",
        linkedIn: "https://www.linkedin.com/in/rachael-babcock",
        twitter: "https://twitter.com/r_s_babcock",
        bio: " A former Animation Producer turned Software Developer, development is where my need to create and passion for solving problems meet. Passionate about fun design and delivering clear, readable and efficient code. In my career, I seek to not only become an excellent developer but an excellent person. As an apprentice Developer and nearly graduated student of NSS, I know Software Development is my calling. There is nothing more thrilling than writing a line of code and seeing it come alive on the browser, or tackling a challenge and getting it to work. Also, I've climbed Mount Doom...",
        quote: "I love to code, and I'd love to work with you"
      }
    ],
    projects: [
      {
        "id": 1,
        "name": "Geo-Zoo",
        "description": "An educational app about endangered animals and the continents they live in. Built with React & Bloomer",
        "url": "http://geo-zoo.s3-website.us-east-2.amazonaws.com/"
      },
      {
        "id": 2,
        "name": "Mad-Words",
        "description": "A fun app for making silly sentences. Built with jQuery",
        "url": "http://mad-words.s3-website.ca-central-1.amazonaws.com/"
      },
      {
        "id": 3,
        "name": "PetBook",
        "description": "A social app for pet owners to share pet quirks, allergies and commands with other sitters and friends",
        "url": "https://www.youtube.com/watch?v=S16lQEl88QE&feature=youtu.be"
      }
    ],
    favorites: [
      {
        "pets": "Scout & Maya"
      }
    ],
    languages: [
      {
        title: "Vanilla Javascript",
        alt: "Vanilla Javascript",
        src: js
      },
      {
        title: "CSS",
        alt: "CSS",
        src: css3
      },
      {
        title: "git & Version Control",
        alt: "git & Version Control",
        src: git
      },
      {
        title: "gitHub Cloud Version Control",
        alt: "gitHub Cloud Version Control",
        src: gitHub
      },
      {
        title: "Grunt.js Tool",
        alt: "Grunt.js Tool",
        src: grunt
      },
      {
        title: "html5 web",
        alt: "html5 web",
        src: html5
      },
      {
        title: "jquery tool",
        alt: "jquery tool",
        src: jquery
      },
      {
        title: "React.js Framework",
        alt: "React.js Framework",
        src: react
      },
      {
        title: "Amazon Web Services",
        alt: "Amazon Web Services",
        src: aws
      },
      {
        title: "Bootstrap Framework",
        alt: "Bootstrap Framework",
        src: bootstrap
      },
      {
        title: "Photography Skills",
        alt: "Photography Skills",
        src: camera
      },
      {
        title: "Codepen.io",
        alt: "Codepen.io",
        src: codepen
      },
      {
        title: "Final Cut - novice",
        alt: "Final Cut - novice",
        src: finalcut
      },
      {
        title: "Adobe Lightroom",
        alt: "Adobe Lightroom",
        src: lightroom
      },
      {
        title: "Adobe Photoshop",
        alt: "Adobe Photoshop",
        src: ps
      },
      {
        title: "Node Package Manager",
        alt: "Node Package Manager",
        src: npm
      },
      {
        title: "VsCode Editor",
        alt: "VsCode Editor",
        src: vscode
      },
      {
        title: "Heroku",
        alt: "Heroku",
        src: heroku
      },
      {
        title: "Python",
        alt: "Python",
        src: python
      },
      {
        title: "Django Framework",
        alt: "Django",
        src: django
      },
      {
        title: "Django Rest Framework",
        alt: "Django Rest",
        src: djangoRest
      },
      {
        title: "SQLite",
        alt: "SQLite",
        src: sqlite
      },
      {
        title: "Markdown",
        alt: "Mardown",
        src: mdown
      },
      {
        title: "Apigee",
        alt: "Apigee",
        src: apigee
      },
      {
        title: "Sass",
        alt: "Sass",
        src: sass
      },
      {
        title: "Node",
        alt: "Node",
        src: node
      },
      {
        title: "Redux",
        alt: "Redux",
        src: redux
      },
    ]
  }
  uniqueKey = 1

  showView = function (e) {
    let view = null

    // Click event triggered switching view
    if (e.hasOwnProperty("target")) {
      view = e.target.id.split("__")[1]

      // View switch manually triggered by passing in string
    } else {
      view = e
    }
    // Update state to correct view will be rendered
    this.setState({
      currentView: view,
    })

  }.bind(this)


  View = () => {
    switch (this.state.currentView) {
      case "about":
        return <About me={this.state.me} key={this.key} showView={this.showView} />
      case "skills":
        return <Home langs={this.state.languages} me={this.state.me} key={this.key} showView={this.showView} />
      case "projects":
        return <ProjectList projects={this.state.projects} key={this.key} showView={this.showView} />
      // case "favs":
      //   return <Favs favs={this.state.favorites} key={this.key} showView={this.showView} />
      case "graphicDesign":
        return <GraphicDesign showView={this.showView}/>
      case "book":
        return <Home langs={this.state.languages} me={this.state.me} key={this.key} showView={this.showView} />
      default:
        return <Home langs={this.state.languages} me={this.state.me} key={this.key} showView={this.showView} />
    }
  }


  render() {
    return (
      <div>
        <NavBar showView={this.showView} />
        <div className="page_container">
          {this.View()}
        </div>
        <Footer />
      </div>
    )
  }

}

export default App
