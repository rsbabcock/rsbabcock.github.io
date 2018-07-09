import React, { Component } from 'react'
import Project from './Project'
import './projectList.css'
import lightbulb from '../img/lightbulb.png'

class ProjectList extends Component {

    
    render() {
        return (
            <div className="projectList">
            <div className="project__page">
                <h1> My Projects </h1>
                <img src={lightbulb} alt="Lightbulb" title="Bright Ideas" />
            </div>
            <div className="project__page__second" id="projects">
                {this.props.projects.map(project => (
                    <div key={project.id}>
                    <Project name={project.name}
                             description={project.description}
                             url={project.url}
                             key={this.props.key}
                             id={project.id} />
                             </div>
                ))}
            </div>
            </div>
        )
    }
}

export default ProjectList