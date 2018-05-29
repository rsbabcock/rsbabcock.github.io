import React, { Component } from "react"
// import './projectList.css'
// import ProjectList from "./ProjectList"


class Movies extends Component {
    render() {
        return (
            <article className="Movies">
                <div>
                { this.props.movie.map (currentMovie => ( 
                    <div>
                    <p> {currentMovie} </p>
                    </div>
                ))}
                </div>
            </article>
        )
    }
}

export default Movies
