import React, { Component } from "react"
import '../styles/projectList.css'
// import ProjectList from "./ProjectList"


class Project extends Component {
    render() {
        return (
            <article className="project">
                <div><h4>{ this.props.name }</h4></div>
                <div>{ this.props.description }</div>
                <div> {this.props.url} </div>
            </article>
        )
    }
}

export default Project