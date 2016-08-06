import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Manage from './components/ManageComponent';
import Index from './components/IndexComponent';
import { Router, browserHistory, hashHistory, IndexRoute } from 'react-router'
// Render the main component into the dom
ReactDOM.render((
    <Router history={browserHistory}>
        <Router path="/" component={App}>
            <IndexRoute component={Index} />
            <Router path="/manage" component={Manage} />
        </Router>
    </Router>
    )
    , document.getElementById('app')
);
