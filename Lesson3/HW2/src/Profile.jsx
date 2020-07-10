import React from 'react';
import moment from 'moment';

const Profile = (props) => {
    const ren = moment(props.user.birthDate).format("DD MMM YY");

    return (
        <div className="profile">
            <div className="prifile__name">
                {`${props.user.firstName} ${props.user.lastName}`}
            </div>
            <div className="profile__birth">
                {`Was born ${ren} in ${props.user.birthPlace}`}
            </div>
        </div>
    );
};

export default Profile;