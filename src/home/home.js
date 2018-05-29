import React, { Component } from 'react'
import Carousel from './Carousel'
import home from './home.css'
// Your name
// List of technologies you've learned so far

class Home extends Component {
    constructor (props) {
        super(props)

        /*
            Used for Contact component keys. Read the docs
            for more info.

            https://reactjs.org/docs/reconciliation.html#keys
        */
        this.uniqueKey = 1

        // Define initial state
        this.state = {
            home: []
        }
    }
    loadPerson () {
        fetch("http://localhost:8088/me")
            // Must be explicit on how to parse the response
            .then(r => r.json())

            // JSON parsed data cohomes to this then()
            .then(home => {
                this.setState({
                    home: home
                })
            })
        }
        
        componentDidMount() {
            this.loadPerson()  // Trigger the loading of contacts
        }
        
        render() {
            // debugger
        return (
            <div className="container">
                {this.state.home.map(p => (
                    <div key={this.uniqueKey++} className="home">
                    <h1>{p.firstName} {p.lastName}</h1>
                    <p>Full-Stack Developer</p>
                    <p>{p.email} | {p.number}</p>
                    <a href={p.linkedIn} target="_blank"> {p.linkedIn}</a>
                    |
                    <a href={p.gitHub}target="_blank"> {p.gitHub}</a>
                    </div>
                ))}
                <div id="container">
                </div>
                 <Carousel />
                </div>
        );
    }
}

export default Home