import React, { Component } from 'react'
import pets from '../img/pets.jpg'
import heart from '../img/heart.png'
import pickles from '../img/pickles.png'
import popcorn from '../img/popcorn.png'
import './favs.css'
import paws from '../img/paws.png'


class Favs extends Component {

    render() {
        return (
            <div className="favsContainer">
            <div className="favs__title">
                <h1> A few of my favourite things. . . </h1>
                <img src={heart} alt="favourites" title="favourites" />
               <img src={paws} alt="paw prints" title="paw prints" id="paws2"/>
            </div>
            <div className="Favs">
                {this.props.favs.map(favs => (
                    <div className="favorites" key={favs.id++}>
                        <div>
                           <p>{favs.pets}</p>
                           <img src={pets} alt="Scout & Maya" title="Scout & Maya" />
                        </div>
                        <div>
                            <p>Pickles</p>
                            <img src={pickles} alt="Sweet Pickles" title="Sweet Pickles" />
                        </div>
                        <div>
                            <p>Popcorn</p>
                            <img src={popcorn} alt="Sweet Popcorn" title="Sweet Popcorn" />
                        </div>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

export default Favs