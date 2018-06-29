import React, { Component } from 'react'
import './styles/App.css'
import Home from './home/home';
import NavBar from './nav/navBar';






class App extends Component {

  // Set initial state
  state = {
    me: [],
    projects: [],
    favorites: [],
    places: []
  }
  uniqueKey = 1

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
    // this.getPlaces()

  }




  render() {
    return (
      <div>
        <NavBar/>
        <Home me={this.state.me} 
        projects={this.state.projects} 
        favs={this.state.favorites} 
        places={this.state.places}
        key={this.uniqueKey++}/>
      </div>
    )
  }

}

    export default App
