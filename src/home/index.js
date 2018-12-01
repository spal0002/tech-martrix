import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import '../assets/css/styles.css';
import Home from './homecomponent';

// import * as services from '../services/index';


class HomeComponent extends Component {

    state = {
        loggedIn:true
    }
    
    componentWillMount () {
    //    services.setLocalStorage();
    }


    render() {
        let content = null;
        if (this.state.loggedIn) {
            content = <Home />

        } else {
            content = "Login";
        }

        return (
            <Router>
                {content}
            </Router>
        );
    }
}
export default withRouter(HomeComponent);