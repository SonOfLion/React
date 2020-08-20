import React, { useState, useEffect } from 'react';

const User = (props) => {
    const [userData, setUserData] = useState({
        avatarUrl: null,
        name: null,
        location: null
    });

    const userId = props.match.params.name;

    useEffect(() => {
        fetch(`https://api.github.com/users/${userId}`)
            .then(response => response.json())
            .then(userData => {
                setUserData(userData)
            })
    }, [userId])

    if(!userData) {
        return null
    };

    const { avatar_Url, name, location } = userData;

    return (
        <div className="user">
            <img alt="User Avatar" src={avatar_Url} className="user__avatar" />
            <div className="user__info">
                <span className="user__name">{name}</span>
                <span className="user__location">{location}</span>
            </div>
        </div>
    );
};

export default User;