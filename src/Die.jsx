import React from 'react';
import './Die.css';

const ICON_CLASS = "fas fa-dice-";
const DIGITS = ["", "one", "two", "three", "four", "five", "six"];
const ANIMATION_CLASS = " animated wobble";

class Die extends React.Component {

    getIconClass() {
        return ICON_CLASS + DIGITS[+this.props.num];
    }

    render() {
        let style = `die ${this.getIconClass()}`

        if (this.props.isRolling) {
            style += ANIMATION_CLASS;
        }
        
        return(
            <i className={style}></i>
        )
    }
}

export default Die;
