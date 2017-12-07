import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Home, TreePage } from './pages';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
                    <Route path={process.env.PUBLIC_URL + '/tree'} component={TreePage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
