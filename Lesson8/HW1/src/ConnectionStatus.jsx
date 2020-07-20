//Create class function +++
//create status online +++
//create track status online/offline +++
import React,{Component} from 'react';

class ConnectionStatus extends Component {
    constructor (props){
        super(props);
        
            this.state = {
                status: 'online',
            };
    };

    componentDidMount () {
        window.addEventListener('online', this.statusOnline);
        window.addEventListener('offline', this.statusOffline);
    };

    componentWillUnmount () {
        window.removeEventListener('online', this.statusOnline);
        window.removeEventListener('offline', this.statusOffline);
    };

    statusOnline = () => {
        this.setState({
            status:'online'
        });
    };

    statusOffline = () => {
        this.setState({
            status:'offline'
        });
    };

    render() {
        let statusOffOn = `status ${this.state.status === 'offline' && 'status_offline'}`;
        return(
            <div className={statusOffOn}>{this.state.status}</div>
        );
    };
};

export default ConnectionStatus;