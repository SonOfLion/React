import React, { Component } from 'react';
import './auth.scss';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner'; 

class Auth extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLogidIn: false,
            isProcessing: true,
        };
    };

    onLogin = () => {
        this.setState({
            isLogidIn:true,
        });

        setTimeout(() => {
            this.setState({
                isProcessing: false,
            })
        }, 2000);
    };

    onLogout = () => {
        this.setState({
            isLogidIn: false,
            isProcessing: true,
        });
    };

    render() {
        
        if(this.state.isLogidIn){
            return (
                <>
                    {this.state.isProcessing ? 
                    (<Spinner size={30} />) : 
                    (<Logout onLogout={this.onLogout} />)
                    }
                </>
            );
        };
        return <Login onLogin={this.onLogin}/>
    };
};

export default Auth;