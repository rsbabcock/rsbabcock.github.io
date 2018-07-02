import React, { Component } from "react"
import './projectList.css'
// import ProjectList from "./ProjectList"


class Project extends Component {
    render() {
        return (
            <article className="project" id={`${this.props.name}__${this.props.id}`}>
                {/* <h1 className="invisible">invisible</h1> */}
                <div id={`project__${this.props.name}`}>
                <p>{ this.props.name }</p>
                <p>{ this.props.description }</p>
                <a href={this.props.url} target="_blank">{this.props.url}</a>
                </div>
            </article>
        )
    }
}

export default Project