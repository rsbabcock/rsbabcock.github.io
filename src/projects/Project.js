import React, { Component } from "react"
import './projectList.css'
// import ProjectList from "./ProjectList"


class Project extends Component {
    render() {
        return (
            <article className="project">
                <div><h4>{ this.props.name }</h4></div>
                <div>{ this.props.description }</div>
                <a href={this.props.url} target="_blank">{this.props.url}</a>
            </article>
        )
    }
}

export default Project