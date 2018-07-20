import React, { Component } from 'react'
import './App.css'
// import Home from './home/home';
import NavBar from './nav/navBar';
import Cover from './cover/cover';
import Book from './book/book'
import Favs from './favs/favs'
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
import Footer from './nav/footer'




// other images
// import linkedin from './img/languages/linkedin.svg'



class App extends Component {

  // Set initial state
  state = {
    currentView: "book",
    me: [],
    projects: [],
    favorites: [],
    places: [],
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
      }
    ]
  }
  uniqueKey = 1

  // function to get my info
  getMe = () => {
    fetch("https://rsbabcock-site.herokuapp.com/me")
      .then(r => r.json())
      .then(me => {
        this.setState({
          me: me
        })
      })
  }
  // function to get my projects
  getProjects = () => {
    fetch("https://rsbabcock-site.herokuapp.com/projects")
      .then(r => r.json())
      .then(projects => {
        this.setState({
          projects: projects
        })
      })
  }
  // function to get my favorite things
  getFavorites = () => {
    fetch("https://rsbabcock-site.herokuapp.com/favorites")
      .then(r => r.json())
      .then(favorites => {
        this.setState({
          favorites: favorites
        })
      })
  }
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
        return <Cover me={this.state.me} key={this.key} showView={this.showView} />
      case "skills":
        return <Book langs={this.state.languages} me={this.state.me} key={this.key} showView={this.showView}/>
      case "projects":
        return <ProjectList projects={this.state.projects} key={this.key} showView={this.showView}/>
      case "favs":
        return <Favs favs={this.state.favorites} key={this.key} showView={this.showView}/>
      case "book":
        return <Book langs={this.state.languages} me={this.state.me} key={this.key} showView={this.showView}/>
      default:
        return <Book langs={this.state.languages} me={this.state.me} key={this.key} showView={this.showView}/>
    }
  }


// Component that gets all animal and continent info
componentDidMount() {
  this.getMe()
  this.getProjects()
  this.getFavorites()
}


render() {
  return (
    <div>
      <NavBar showView={this.showView}/>
      <div className="page_container">
        {this.View()}
      </div>
      <Footer />
    </div>
  )
}

}

export default App
