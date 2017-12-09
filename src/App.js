import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Home, TreePage, DetailPage } from './pages';

const RoutePath = ({title, component, exact}) => (
    exact === true ?
        <Route exact path={process.env.PUBLIC_URL + title} component={component} /> :
        <Route path={process.env.PUBLIC_URL + title} component={component} />
);

class App extends Component {
    render() {
        return (
            <div>
                <RoutePath title={'/'} component={Home} exact={true} />
                <RoutePath title={'/projects'} component={TreePage} exact={true} />
                <Switch>
                    <RoutePath title={'/projects/:page'} component={DetailPage} exact={true} />
                </Switch>
            </div>
        );
    }
}

export default App;
