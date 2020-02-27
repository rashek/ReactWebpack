import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';

import User from './containers/User';
import asynchComponent from './hoc/asyncComponent';

const AsyncPizza = asynchComponent(() => {
    return import('./containers/Pizza.js');
})

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">User</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path='/' exact component={User}></Route>
                    <Route path='/pizza' component={AsyncPizza}></Route>
                </div>
                
            </div>
        )
    }
}

export default App;