import React from 'react';
import moment from 'moment';
import {Component} from 'react';

class Profile extends Component {
    // console.log(props);
    render(){const ren = moment(this.props.userData.birthDate).format("DD MMM YY");
    // console.log(props);
    return (
        <div className="profile">
            <div className="prifile__name">
                {`${this.props.userData.firstName} ${this.props.userData.lastName}`}
            </div>
            <div className="profile__birth">
                {`Was born ${ren} in ${this.props.userData.birthPlace}`}
            </div>
        </div>
    );
    };
};

export default Profile;