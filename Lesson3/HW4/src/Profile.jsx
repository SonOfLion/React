import React, { Component } from 'react';
import './Profile.scss';
import moment from 'moment';

class Profile extends Component {
    render() {

        const age = moment(this.props.userData.birthDate).format('DD MMM YY');

        return (
            <div className="profile">
                <div className="profile__name">
                    {this.props.userData.firstName} {this.props.userData.lastName}
                </div>
                <div className="profile__birth">
                    Was born {age} in {this.props.userData.birthPlace}
                </div>
            </div>
        );
    };
};

export default Profile;