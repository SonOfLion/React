import React from 'react';
import moment from 'moment';
// import {Component} from 'react';

const Profile = (props) => {
    // console.log(props);
    const ren = moment(props.userData.birthDate).format("DD MMM YY");
    // console.log(props);
    return (
        <div className="profile">
            <div className="prifile__name">
                {`${props.userData.firstName} ${props.userData.lastName}`}
            </div>
            <div className="profile__birth">
                {`Was born ${ren} in ${props.userData.birthPlace}`}
            </div>
        </div>
    );
};

export default Profile;