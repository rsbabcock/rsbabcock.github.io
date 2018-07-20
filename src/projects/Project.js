import React, { Component } from "react"
import './projectList.css'


class Project extends Component {
    render() {
        return (
            <article className="project" id={`${this.props.name}__${this.props.id}`}>
                {/* <h1 className="invisible">invisible</h1> */}
                <div id={`project__${this.props.name}`}>
                <h1>{ this.props.name }</h1>
                <p>{ this.props.description }</p>
                <a href={this.props.url} target="_blank">Link</a>
                </div>
            </article>
        )
    }
}

export default Project