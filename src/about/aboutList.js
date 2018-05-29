import React, { Component } from 'react'
import Movies from './movies';
import Tv from './tv';
import Book from './books';
import Pets from './pets';
import './aboutList.css'
// import './projectList.css'


class AboutList extends Component {

    constructor(props) {
        super(props)
        this.uniqueKey = 1
    }

    state = {
        AboutList: []
    }

    componentDidMount() {
        fetch("http://localhost:8088/favorites")
            .then(r => r.json())
            .then(about => {
                this.setState({
                    AboutList: about
                })
            })
    }

    render() {
        return (
            <div className="AboutList">
                <h3> About Me </h3>
                {this.state.AboutList.map(about => (
                    <div className="aboutContainer">
                        <div>
                            <h4> Favourite Frogs</h4>
                            <p> {about.frog} </p>
                        </div>
                        <div>
                            <h4> Favourite Movies </h4>
                            <Movies movie={about.movie} />
                        </div>
                        <div>
                            <h4> Favourite Shows </h4>
                            <Tv tv={about.tv} />
                        </div>
                        <div>
                            <h4> Favourite Books </h4>
                            <Book book={about.books} />
                        </div>
                        <div>
                            <h4> My Pets </h4>
                            <Pets pets={about.pets} />
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default AboutList