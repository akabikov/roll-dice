import React from 'react';
import './Die.css';

const ICON_CLASS = "fas fa-dice-";
const DIGITS = ["", "one", "two", "three", "four", "five", "six"];
const ANIMATION_CLASS = "animated wobble";

class Die extends React.Component {

    getIconClass() {
        return ICON_CLASS + DIGITS[+this.props.num];
    }

    render() {
        return(
            <i 
                className={`die 
                            ${this.getIconClass()} 
                            ${this.props.isRolling ? ANIMATION_CLASS : ""}`}>

            </i>
        )
    }
}

export default Die;
