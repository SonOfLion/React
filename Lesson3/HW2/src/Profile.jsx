import React from 'react';
import moment from 'moment';
import {Component} from 'react';

class Profile extends Component {
    render(){
    const ren = moment(this.props.user.birthDate).format("DD MMM YY");

    return (
        <div className="profile">
            <div className="prifile__name">
                {`${this.props.user.firstName} ${this.props.user.lastName}`}
            </div>
            <div className="profile__birth">
                {`Was born ${ren} in ${this.props.user.birthPlace}`}
            </div>
        </div>
    );
    };
};

export default Profile;