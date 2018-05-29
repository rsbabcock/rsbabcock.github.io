import React, { Component } from "react"
import scoutMaya from '../img/pets.jpg'
// import './about.css'
// import './projectList.css'
// import ProjectList from "./ProjectList"


class Pets extends Component {
    render() {
        return (
            <article className="Pets">
                <div>
                    <p> {this.props.pets} </p>
                    <img src={scoutMaya} alt="my pets" width="500" height="400"/>
                </div>
            </article>
        )
    }
}

export default Pets
