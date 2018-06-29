import React, { Component } from 'react'
import home from './home.css'
import FlipPage from "react-flip-page"
import ProjectList from '../projects/ProjectList';
import Me from '../about/me';
import Cover from '../cover/cover';
// Your name
// List of technologies you've learned so far

class Home extends Component {
    render() {
        // debugger
        return (
            <div className="flipContainer">
                <FlipPage orientation="horizontal"
                flipOnTouch
                showSwipeHint
                uncutPages
                perspective="20em"
                width="500">
                    <article>
                        <Cover me={this.props.me} key={this.props.key} />
                    </article>
                    <article>
                        <Me me={this.props.me} key={this.props.key}/>    
                    </article>
                    <article>
                        <h1><ProjectList projects={this.props.projects}/></h1>
                    </article>
                </FlipPage>
            </div>
        );
    }
}

export default Home