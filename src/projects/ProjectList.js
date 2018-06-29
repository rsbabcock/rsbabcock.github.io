import React, { Component } from 'react'


class ProjectList extends Component {

    constructor (props) {
        super(props)
        this.uniqueKey = 1
    }

    state = {
        projectList: []
    }

    componentDidMount() {
        fetch("http://localhost:8088/projects")
            .then(r => r.json())
            .then(projects => {
                    this.setState({
                        projectList: projects
                    })
            })
    }

    render() {
        return (
            <div className="projectList">
                <h3> Projects </h3>
                {this.state.projectList.map(project => (
                    <Project name={project.name}
                             description={project.description}
                             url={project.url}
                             key={this.uniqueKey++} />
                ))}
            </div>
        )
    }
}

export default ProjectList