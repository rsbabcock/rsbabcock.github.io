import React, { Component } from 'react'
import Project from './Project';


class ProjectList extends Component {


    render() {
        return (
            <div className="projectList">
                <h3> Projects </h3>
                <Project/>
            </div>
        )
    }
}

export default ProjectList