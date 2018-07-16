import React, { Component } from 'react'
import pets from '../img/pets.jpg'
import heart from '../img/heart.png'
import './favs.css'


class Favs extends Component {

    render() {
        return (
            <div className="favsContainer">
                    <h1> A few of my favourite things. . .
                <img height="10%" width="10%" src={heart} alt="favourites" title="favourites" />
                    </h1>
                <div className="Favs">
                    {this.props.favs.map(favs => (
                        <div className="favorites" key={favs.id++}>
                            <div>
                                <h1>{favs.pets}</h1>
                                <img src={pets} alt="Scout & Maya" title="Scout & Maya" />
                            </div>
                            <div>
                                <h1>Blog</h1>
                                <p>Coming Soon</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Favs