import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            value: '',
        };
    };

    onChange = event => {
        this.setState({
            value: event.target.value
        });
    };

    render () {
        let filtredUsersList = (this.state.value === ''
        ? this.props.users
        : this.props.users.filter(user => user.name.toLowerCase()
        .includes(this.state.value.toLowerCase())))
        .map(
            user => <User key={user.id}
            {...user} />);
    
        return (
            <>
                <Filter 
                onChange={this.onChange}
                count={filtredUsersList.length}
                filterText={this.state.value}
                />
                <ul className="users">
                    {filtredUsersList}
                </ul>
            </>
        );
    };
};

export default UsersList;