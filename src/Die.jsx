import React from 'react';
import './Die.css';

const ICON_CLASS = "fas fa-dice-";
const DIGITS = ["", "one", "two", "three", "four", "five", "six"];

class Die extends React.Component {

    getIconClass() {
        return ICON_CLASS + DIGITS[+this.props.num];
    }

    render() {
        return(
            <div className="die">
                <div className={this.props.animation}>
                    <i className={this.getIconClass()}></i>
                </div>
            </div>
        )
    }
}

export default Die;
