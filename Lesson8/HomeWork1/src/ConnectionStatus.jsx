import React, { Component } from 'react';
import './connectionstatus.scss';

class ConnectionStatus extends Component {
    state = {
        status:'online',
    };

    componentDidMount(){
        window.addEventListener('online',this.statusOnline);
        window.addEventListener('offline',this.statusOffline);
    };
    
    componentWillUnmount(){
        window.removeEventListener('online',this.statusOnline);
        window.removeEventListener('offline',this.statusOffline);
    };

    statusOnline = () => {
        this.setState({
            status:'online',
        });
    };

    statusOffline = () => {
        this.setState({
            status:'offline',
        });
    };

    render() {
        // if(this.state.status == 'offline'){
        //     return <div className="status_offline">{this.state.status}</div>
        // }
        // return <div className="status">{this.state.status}</div>

        const changeStatus = `status ${this.state.status === 'offline' && 'status_offline'}`;

        return (
            <div className={changeStatus}>{this.state.status}</div>
        );
    };
};

export default ConnectionStatus;