import React, { Component } from "react"
// import './projectList.css'
// import ProjectList from "./ProjectList"


class Place extends Component {
    render() {
        return (
            <article className="places">
            <div>
                <div>
                <img src={this.props.image} alt={this.props.name} title={this.props.name}/>
                </div>
            </div>
        </article>
        )
    }
}

export default Place
