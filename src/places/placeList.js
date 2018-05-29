import React, { Component } from 'react'
import Place from './place';
import './placeList.css'
// import './projectList.css'


class PlaceList extends Component {

    constructor(props) {
        super(props)
        this.uniqueKey = 1
    }

    state = {
        PlaceList: []
    }

    componentDidMount() {
        fetch("http://localhost:8088/places")
            .then(r => r.json())
            .then(place => {
                this.setState({
                    PlaceList: place
                })
            })
    }

    render() {
        return (
            <div className="placePage">
            <div>
                <h3> Places I've Traveled </h3>
            </div>
            <div className="PlaceList">
                {this.state.PlaceList.map(currentPlace => (
                    <div className="placeContainer">
                        <div>
                           <Place name={currentPlace.name} image={currentPlace.image} />
                        </div>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

export default PlaceList