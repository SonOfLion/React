import React,{Component} from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
        }
    }
    
    textOfColor = text => {
        this.setState({
            color: text,
        });
    }

    render() {
        return (
            <div>
                <div className="picker__title">
                    {this.state.color}
                </div>
                <div>
                    <button 
                        className="picker__button picker__button_coral"
                        onMouseEnter={() => this.textOfColor('Coral')}
                        onMouseLeave={() => this.textOfColor('')}>
                    </button>
                    <button 
                        className="picker__button picker__button_aqua"
                        onMouseEnter={() => this.textOfColor('Aqua')}
                        onMouseLeave={() => this.textOfColor('')}>
                    </button>
                    <button 
                        className="picker__button picker__button_bisque"
                        onMouseEnter={() => this.textOfColor('Bisque')}
                        onMouseLeave={() => this.textOfColor('')}>
                    </button>
                </div>
            </div>
        )
    }
}

export default ColorPicker;
