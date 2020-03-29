import React from 'react';
import './Die.css';

const ICON_CLASS = "fas fa-dice-";
const DIGITS = ["", "one", "two", "three", "four", "five", "six"];

class Die extends React.Component {
    static defaultProps = {num : 1}

    getIconClass() {
        return ICON_CLASS + DIGITS[+this.props.num];
    }

    render() {
        return(
            <div>
                <i className={this.getIconClass()}></i>
            </div>
        )
    }
}

export default Die;
