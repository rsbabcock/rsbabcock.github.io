import React, { Component } from 'react'
import Place from './place';
import './placeList.css'
// import './projectList.css'


class PlaceList extends Component {

    render() {
        return (
            <div className="placePage">
            <div className="first__place">
                <h3> I love to travel! </h3>
            </div>
            <div className="second__place">
                {this.props.places.map(currentPlace => (
                    <div className="placeContainer">
                        <div >
                           <Place name={currentPlace.name} image={currentPlace.image} key={this.props.key}/>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

export default PlaceList