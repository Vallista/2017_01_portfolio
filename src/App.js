import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Home, TreePage, DetailPage } from './pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/projects"} component={TreePage}/>
                <Route exact path={"/projects/:page"} component={DetailPage}/>
            </div>
        );
    }
}

export default App;
