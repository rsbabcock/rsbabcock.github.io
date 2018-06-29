import React, { Component } from 'react'
import './App.css'
import NavBar from './nav/NavBar';





class App extends Component {

  // Set initial state
  state = {
    me: [],
    projects: [],
    favorites: [],
    places: []
  }



  // Argument can be an event (via NavBar) or a string (via Login)
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
  // get annimals
  // function to get my info
  getMe = () => {
    fetch("http://localhost:8088/me")
      .then(r => r.json())
      .then(me => {
        this.setState({
          me: me
        })
      })
  }
  // function to get my projects
  getProjects = () => {
    fetch("http://localhost:8088/projects")
      .then(r => r.json())
      .then(projects => {
        this.setState({
          projects: projects
        })
      })
  }
  // function to get my favorite things
  getFavorites = () => {
    fetch("http://localhost:8088/favorites")
      .then(r => r.json())
      .then(favorites => {
        this.setState({
          favorites: favorites
        })
      })
  }
  // function to get places I've visited
  getPlaces = () => {
    fetch("http://localhost:8088/places")
      .then(r => r.json())
      .then(places => {
        this.setState({
          places: places
        })
      })
  }

  // function to handle game play


  // Component that gets all animal and continent info
  componentDidMount() {
    this.getMe()
    this.getProjects()
    this.getFavorites()
    this.getPlaces()

  }


  View = () => {
    switch (this.state.currentView) {
      case "gameScore":
        return <GameScore score={this.state.userScore} activeUser={this.state.activeUser} counter={this.state.counter} showView={this.randomizeHandler} />
      case "scoreList":
        return <ScoreList activeUser={this.state.activeUser} />
      case "welcome":
        return <Welcome activeUser={this.state.activeUser} showView={this.showView} />
      default:
        return <Welcome activeUser={this.state.activeUser} showView={this.showView} />
    }
  }
}

render() {
  return (
    <article>
      <NavBar viewHandler={this.showView}
        activeUser={this.state.activeUser}
        setActiveUser={this.setActiveUser}
        randomizeHandler={this.state.randomizeHandler}
      // profileHandler={this.viewProfile}
      />

      {this.View()}
    </article>
  )
}
}


export default App
