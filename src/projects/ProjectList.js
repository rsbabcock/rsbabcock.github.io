import React, { Component } from 'react'
import Project from './Project'
import './projectList.css'


class ProjectList extends Component {

    
    render() {
        return (
            <div className="projectList">
            <div>
                {this.props.projects.map(project => (
                    <div key={project.id}>
                    <Project name={project.name}
                             description={project.description}
                             url={project.url}
                             key={this.props.key} />
                             </div>
                ))}
            </div>
            </div>
        )
    }
}

export default ProjectList