import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList';
import Cover from '../cover/cover';
import Favs from '../favs/favs';
import Book from '../book/book';
import './home.css'
// Your name
// List of technologies you've learned so far

class Home extends Component {
    
    state = {
        width:"90vw"
    }

    
    render() {
        // debugger
        return (
            <div className="page_container">
                        <Book langs={this.props.languages} me={this.props.me} key={this.key}/>
                        <Cover me={this.props.me} key={this.key} />
                        <ProjectList projects={this.props.projects} key={this.key}/>
                        <Favs favs={this.props.favs} key={this.key}/>
                    </div>
        );
    }
}

export default Home