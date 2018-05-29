import React, { Component } from "react"
// import './projectList.css'
// import ProjectList from "./ProjectList"


class Tv extends Component {
    render() {
        return (
            <article className="Tv">
                <div>
                { this.props.tv.map (currentTv => ( 
                    <div>
                    <p> {currentTv} </p>
                    </div>
                ))}
                </div>
            </article>
        )
    }
}

export default Tv
