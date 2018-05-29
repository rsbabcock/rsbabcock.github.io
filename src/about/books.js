import React, { Component } from "react"
// import './projectList.css'
// import ProjectList from "./ProjectList"


class Book extends Component {
    render() {
        return (
            <article className="Book">
                <div>
                { this.props.book.map (currentBook => ( 
                    <div>
                    <p> {currentBook} </p>
                    </div>
                ))}
                </div>
            </article>
        )
    }
}

export default Book
