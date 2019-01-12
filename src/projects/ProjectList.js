import React, { Component } from 'react'
import './projectList.css'
import lightbulb from '../img/lightbulb.png'
import { Carousel } from 'react-bootstrap'

import geoZoo from '../img/projectImages/geo-zoo.png'
import madWords from '../img/projectImages/mad-words.png'
import PetBook from '../img/projectImages/PetBook.png'

class ProjectList extends Component {
    state = {
        projects: [
            {
                id: 1,
                name: "Geo-Zoo",
                description: "An educational app about endangered animals and the continents they live in. Built with React & Bloomer",
                url: "http://geo-zoo.s3-website.us-east-2.amazonaws.com/",
                img: geoZoo
            },
            {
                id: 2,
                name: "Mad-Words",
                description: "A fun app for making silly sentences. Built with jQuery",
                url: "http://mad-words.s3-website.ca-central-1.amazonaws.com/",
                img: madWords
            },
            {
                id: 3,
                name: "PetBook",
                description: "A social app for pet owners to share pet quirks, allergies and commands with other sitters and friends",
                url: "https://www.youtube.com/watch?v=S16lQEl88QE&feature=youtu.be",
                img: PetBook
            }
        ],
    }


    render() {
        return (
            <div id="projects" className="projectList">
                <h1 className="project_header"> My Projects
                <img src={lightbulb} alt="Lightbulb" title="Bright Ideas" />
                </h1>
                <Carousel>
                    {this.state.projects.map(project => (
                        <Carousel.Item key={project.id}>
                            <img width={900} height={500} alt={project.name} src={project.img} />
                            <Carousel.Caption>
                                {/* <p>{project.description}</p> */}
                                <a href={project.url} target="_blank">Link</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        )
    }
}

export default ProjectList