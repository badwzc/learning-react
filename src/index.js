import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Manage from './components/ManageComponent';
import Index from './components/IndexComponent';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './stores/index';
// Render the main component into the dom
ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Index} />
                <Route path="/manage" component={Manage} />
            </Route>
        </Router>
    </Provider>
    )
    , document.getElementById('app')
);
