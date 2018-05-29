import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./nav/navBar";
import Home from './home/home';
import ProjectList from './projects/ProjectList';
import AboutList from './about/aboutList';
import PlaceList from './places/placeList';


ReactDOM.render((
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects/" component={ProjectList} />
            <Route exact path="/about/" component={AboutList} />
            <Route exact path="/places/" component={PlaceList} />
        </div>
    </Router>
), document.querySelector("#root"))