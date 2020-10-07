import React from 'react';

function Spinner ({size}) {
    const styles = {
        height: `${size}px`,
        width:`${size}px`,
    };

    return(
        <span className="spinner" style={styles}></span>
    );
};

export default Spinner;