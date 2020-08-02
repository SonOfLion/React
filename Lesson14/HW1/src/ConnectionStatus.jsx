import React from 'react';
import {useState, useEffect} from 'react';

function ConnectionStatus () {
    const [status, setStatus] = useState('online');

    useEffect(() => {
        const statusOnline = () => {
            setStatus('online');
        };

        const statusOffline = () => {
            setStatus('offline');
        };
    
        window.addEventListener('online', statusOnline);
        window.addEventListener('offline', statusOffline);
    
        return () => {
            window.removeEventListener('online', statusOnline)
            window.removeEventListener('offline', statusOffline)
        };
    
    }, [status])

    return(
        <div className={`status ${status === 'offline' ? 'status_offline' : ''}`}>
            {status}
        </div>  
        );
};

export default ConnectionStatus;