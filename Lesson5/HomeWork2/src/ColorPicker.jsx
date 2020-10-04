import React, { Component } from 'react';
import './colorpicker.scss';

class ColorPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color:'',
        };
    };

    showColorButton = text => {
        this.setState({
            color:text,
        });
        console.log(this.setState)
    };

    render() {
        return (
            <div className="picker">
                <div className="picker__title">
                    {this.state.color}
                </div>
                <div>
                    <button className="picker__button picker__button_coral"
                        onMouseEnter={()=> this.showColorButton('Coral')}
                        onMouseLeave={()=>this.showColorButton('')}
                    >
                    </button>

                    <button className="picker__button picker__button_aqua"
                        onMouseEnter={()=> this.showColorButton('Aqua')}
                        onMouseLeave={()=>this.showColorButton('')}
                    >
                    </button>

                    <button className="picker__button picker__button_bisque"
                        onMouseEnter={()=> this.showColorButton('Bisque')}
                        onMouseLeave={()=>this.showColorButton('')}
                    >
                    </button>
                </div>
            </div>
        );
    };
};

export default ColorPicker;