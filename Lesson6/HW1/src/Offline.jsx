import React from 'react';

const Offline = ({Logout}) => {
    return (
        <>
            <span className="status__text">Offline</span>
            <button onClick={Logout} className="status__btn">Reconnect</button>
        </>
    );
};

export default Offline;