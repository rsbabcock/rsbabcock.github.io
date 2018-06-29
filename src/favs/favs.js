import React, { Component } from 'react'

// import './projectList.css'


class Favs extends Component {

    render() {
        return (
            <div className="favsContainer">
            <div>
                <h3> A few of my favourite things. . . </h3>
            </div>
            <div className="Favs">
                {this.props.favs.map(favs => (
                    <div className="favorites" key={favs.id++}>
                        <div>
                           {favs.pets}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

export default Favs