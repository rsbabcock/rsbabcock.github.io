import React, { Component } from 'react'
import './App.css'
import NavBar from './nav/NavBar';





class App extends Component {

    // Set initial state
    state = {
        // currentView: "login",
        // activeUser: localStorage.getItem("geoId"),
        userScore: 0,
        animals: [],
        continents: [],
        counter: 0,
        buzzer: ''
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
    getAnimals = () => {
        fetch("http://localhost:8088/animals")
            .then(r => r.json())
            .then(animals => {
                let randomals = animals
                // takes array of animals and randomizes in a shuffle method so that they don't repeat 
                for (let i = randomals.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [randomals[i], randomals[j]] = [randomals[j], randomals[i]];
                }
                this.setState({
                    animals: randomals
                })
            })
    }
    // function to get all continenet info

    // function to handle game play
  

    // Component that gets all animal and continent info
    componentDidMount() {
    
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
