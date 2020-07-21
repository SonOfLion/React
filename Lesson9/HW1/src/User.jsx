import React from 'react';

const User = ({name, age}) =>{
    return (
        <li>
            <span className="user-name">{name}</span>
            <span className="user-age">{age}</span>
        </li>
    );
};

export default User;

//input name and age of users.
//return data of users(name, age).