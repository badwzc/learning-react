import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/AppComponent';
import Manage from './components/ManageComponent';
import Index from './components/IndexComponent';
import ImportantAdgroups from './components/ImportantAdgroupsComponent';
import ImportantKeywords from './components/ImportantKeywordsComponent';
import More from './components/MoreComponent';
import Adgroups from './components/AdgroupsComponent';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './stores/index';

// Render the main component into the dom
ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Index}></IndexRoute>
                <Route path="/manage" component={Manage}></Route>
                <Route path="/manage_important_adgroups" component={ImportantAdgroups}></Route>
                <Route path="/manage_important_keywords" component={ImportantKeywords}></Route>
                <Route path="/more" component={More}></Route>
                <Route path="/campaign/:campaignId" component={Adgroups}></Route>
            </Route>
        </Router>
    </Provider>
    )
    , document.getElementById('app')
);
