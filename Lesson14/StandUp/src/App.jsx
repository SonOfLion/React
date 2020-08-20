import React from 'react';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './Home.jsx';
import User from './User.jsx';
import Users from './Users.jsx';

const App = () => {
    return (
        <div className="page">
            <BrowserRouter>
                <ul className="navigation">
                    <li className="navigation__item">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/users">
                            Users
                        </Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/users" component={Users}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;