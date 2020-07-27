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
        this.setState ({
            visible:!this.state.visible//+++
        });
    };

    render () {

        const {title} = this.props;
        const {children} = this.props;

        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{title}</span>
                    <button className="expand__toggle-btn" onClick={this.toggleButton}>
                        {
                            this.setState.visible 
                            ?<i className="fas fa-chevron-up"></i>
                            :<i className="fas fa-chevron-up"></i>
                        }
                    </button>
                    <div className="expand__content">{children}</div>
                </div>
            </div>
            );
    };
};

export default Expand;