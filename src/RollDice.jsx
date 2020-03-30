import React from 'react';
import './RollDice.css';
import Die from './Die';

const MAX_NUM = 6;
const ANIMATION_DURATION = 1000;

class RollDice extends React.Component {
    
    state = {die1 : 1,
             die2 : 1,
             isRolling : false}

    roll = () => {
        this.setState({die1 : this.getNum(),
                       die2 : this.getNum(),
                       isRolling : true,
                    });
        
        setTimeout(() => this.setState({isRolling : false}), ANIMATION_DURATION);
    }

    getNum() {
        return Math.floor(Math.random() * MAX_NUM) + 1;
    }
    
    render() {
        let {die1, die2, isRolling} = this.state;

        return (
            <div>
                <div className="roll-dice">
                    <Die num={die1} isRolling={isRolling} />
                    <Die num={die2} isRolling={isRolling} />
                </div>
                <button 
                    className="roll-dice-button"
                    onClick={this.roll} 
                    disabled={isRolling}>
                        {isRolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        );
    }
}

export default RollDice;
