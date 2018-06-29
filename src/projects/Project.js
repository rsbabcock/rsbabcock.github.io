import React, { Component } from "react"
import './projectList.css'
// import ProjectList from "./ProjectList"


class Project extends Component {
    render() {
        return (
            <article className="project">
                <p>{ this.props.name }</p>
                <p>{ this.props.description }</p>
                <a href={this.props.url} target="_blank">{this.props.url}</a>
            </article>
        )
    }
}

export default Project