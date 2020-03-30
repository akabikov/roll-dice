import React from 'react';
import './RollDice.css';
import Die from './Die';

const MAX_NUM = 6;
const ANIMATION_CLASS = "animated wobble";
const ANIMATION_DURATION = 1000;

class RollDice extends React.Component {
    
    state = {die1 : 1,
             die2 : 1,
             animation : ""}

    roll = () => {
        this.setState({die1 : this.getNum(),
                       die2 : this.getNum(),
                       animation : ANIMATION_CLASS,
                    });
        setTimeout(() => this.setState({animation : ""}), ANIMATION_DURATION);
    }

    getNum() {
        return Math.floor(Math.random() * MAX_NUM) + 1;
    }
    
    render() {
        let {die1, die2, animation} = this.state;

        return (
            <div>
                <div className="roll-dice">
                    <Die num={die1} animation={animation} />
                    <Die num={die2} animation={animation} />
                </div>
                <button 
                    className="roll-dice-button"
                    onClick={this.roll} 
                    disabled={!!animation}>
                        {animation ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        );
    }
}

export default RollDice;
