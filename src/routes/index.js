import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import home from '../home/index';


class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={home} />
                <Route path="/home" component={home} />
            </Switch>
        );
    }
}

export default Routes;
