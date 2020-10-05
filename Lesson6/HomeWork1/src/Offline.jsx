import React from 'react';

function Offline ( {onLogout} ) {
    return (
        <div className="status">
            <span className="status__text">Offline</span>
            <button className="status__btn" onClick={onLogout}>Reconnect</button>
        </div>
    );
};

export default Offline;