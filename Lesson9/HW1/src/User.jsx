import React from 'react';

const User = ({name, age}) =>{
    return (
        <>
            <span className="user-name">{name}</span>
            <span className="user-age">{age}</span>
        </>
    );
};

export default User;

//input name and age of users.
//return data of users(name, age).