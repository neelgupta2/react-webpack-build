import React from 'react';
import { render } from 'react-dom';
// Import routing components
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import List from './List.jsx'
import App from './App.jsx'
import Task from './Task.jsx'

class Home extends React.Component {
    render() {
        return (
            <h1>Home Page</h1>
        )
    }
}

render (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='/' component={Home} />
            <Route path='/list' component={List} />
            <Route path='/list/:task_id' component={Task} />
        </Route>
    </Router>,
    document.getElementById('container')
);