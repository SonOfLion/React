import React, { Component } from 'react';
import './status.scss';
import Online from './Online';
import Offline from './Offline';

function Status ( {isOnline} ) {
    return(
        <div>
            {isOnline ? <Online /> : <Offline />}
        </div>
    );
};

export default Status;