import React from 'react';

function Login ( {onLogout}) {
    return (
        <button className="logout btn" onClick={onLogout}>Logout</button>
    );
};

export default Login;
