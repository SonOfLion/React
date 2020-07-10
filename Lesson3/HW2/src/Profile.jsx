import React from 'react';
import moment from 'moment';

const Profile = (props) => {
    const ren = moment(props.user.birthDay).format("DD MMM YY");

    return (
        <div className="profile">
            <div className="prifile-name">
                {`${props.user.firstName} ${props.user.lastName}`}
            </div>
            <div className="profile-date">
                {`Was born ${ren} in ${props.user.birthPlace}`}
            </div>
        </div>
    );
};

export default Profile;