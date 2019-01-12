import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './graphic.css'
import lion from '../img/graphics/lion.png'
import horse from '../img/graphics/whiteHorse.png'
import magBW from '../img/graphics/magnoliaBW.png'
import mag1 from '../img/graphics/magnoliaV1.png'
import mag2 from '../img/graphics/magnoliaV2.png'
import nightStand from '../img/graphics/nightstand.png'
import setReps from '../img/graphics/setReps.png'
import tripster from '../img/graphics/tripster.png'
import tripster2 from '../img/graphics/tripster_2.png'



export default class GraphicDesign extends Component {
    state = {
        imgs: [
            {
                id: 1,
                src: lion,
                caption: "The king of the Jungle"
            },
            {
                id : 2,
                src: horse,
                caption: "White Horse"
            },
            {
                id: 3,
                src: magBW,
                caption: "Black and White Magnolia"
            },
            {
                id: 4,
                src: mag1,
                caption: "Magnolia"
            },
            {
                id: 5,
                src: mag2,
                caption: "Magnolia v2"
            },
            {
                id: 6,
                src: nightStand,
                caption: "logo for small application"
            },
            {
                id: 7,
                src: setReps,
                caption: "logo for small application"
            },
            {
                id: 8,
                src: tripster,
                caption: "logo for small application"
            },
            {
                id: 9,
                src: tripster2,
                caption: "logo for small application"
            },

        ]
    }
    render() {
        return (
            <div id="graphicDesign">
                <Carousel>
                    {this.state.imgs.map(img => (
                    <Carousel.Item key={img.id}> 
                        <img width={900} height={500} alt={img.caption} src={img.src} />
                    </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        )
    }
}