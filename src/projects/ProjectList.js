import React, { Component } from 'react'
import Project from './Project'
import './projectList.css'
import lightbulb from '../img/lightbulb.png'

class ProjectList extends Component {


    render() {
        return (
            <div id="projects">
            <div></div>
                <div className="projectList">
                    <h1> My Projects
                <img src={lightbulb} alt="Lightbulb" title="Bright Ideas" />
                    </h1>
                    <div className="project__page__second">
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
            </div>
        )
    }
}

export default ProjectList