import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import User from './User';

const Users = ({match}) => {
    return (
        <BrowserRouter>
        <div className="page__content">
                <h1>Users</h1>
            <ul className="navigation">
                <li className="navigation__item">
                    <Link to={`${match.url}/github`}>GitHub</Link>
                </li>
                <li className="navigation__item">
                    <Link to={`${match.url}/facebook`}>Facebook</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${match.url}`}>
                    <span>Select a user please</span>
                </Route>
                <Route path={`${match.url}/:userId`}
                component={User}/>
            </Switch>
        </div>
        </BrowserRouter>
    );
};

export default Users;

