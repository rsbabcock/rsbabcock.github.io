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
                src: lion,
                caption: "The king of the Jungle"
            },
            {
                src: horse,
                caption: "White Horse"
            },
            {
                src: magBW,
                caption: "Black and White Magnolia"
            },
            {
                src: mag1,
                caption: "Magnolia"
            },
            {
                src: mag2,
                caption: "Magnolia v2"
            },
            {
                src: nightStand,
                caption: "logo for small application"
            },
            {
                src: setReps,
                caption: "logo for small application"
            },
            {
                src: tripster,
                caption: "logo for small application"
            },
            {
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
                    <Carousel.Item>
                        <img width={900} height={500} alt={img.caption} src={img.src} />
                    </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        )
    }
}