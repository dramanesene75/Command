import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import CommandPage from './CommandPage';
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/:uid" render={props => <CommandPage {...props} />} />
                </Switch>
            </Router>
        );
    }
}
export default App;
