import React, { Component } from 'react';
//input (title, children);
//output (title, children);
//state false;
//state visible must chenged;
//create toggleButton with setState
class Expand extends Component {
    state ={
        visible: false//+++
    };

    toggleButton = () => {
        this.setState({
            visible: !this.state.visible,
        });//+++
    };

    render () {

        const {title} = this.props;
        let {children} = this.props;

        if(!this.state.visible){
            children = null;
        };

        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{title}</span>
                    <button className="expand__toggle-btn" onClick={this.toggleButton}>
                        {
                            this.setState.visible 
                            ?<i className="fa fa-chevron-up" aria-hidden="true"></i>
                            :<i className="fa fa-chevron-down" aria-hidden="true"></i>
                        }
                    </button>
                    <div className="expand__content">{children}</div>
                </div>
            </div>
            );
    };
};

export default Expand;