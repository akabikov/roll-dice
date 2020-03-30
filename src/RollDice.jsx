import React from 'react';
import './RollDice.css';
import Die from './Die';

const MAX_NUM = 6;
const ANIMATION_CLASS = "animated wobble";
const ANIMATION_DELAY = 1000;

class RollDice extends React.Component {
    
    state = {die1 : 1,
             die2 : 1,
             animation : ""}

    roll = () => {
        this.setState({die1 : this.getNum(),
                       die2 : this.getNum(),
                       animation : ANIMATION_CLASS,
                    });
        setTimeout(() => this.setState({animation : ""}), ANIMATION_DELAY);
    }

    getNum() {
        return Math.floor(Math.random() * MAX_NUM) + 1;
    }
    
    render() {
        return (
            <div>
                <Die num={this.state.die1} animation={this.state.animation} />
                <Die num={this.state.die2} animation={this.state.animation} />
                <button 
                    onClick={this.roll} 
                    disabled={!!this.state.animation}>
                        {this.state.animation ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        );
    }
}

export default RollDice;
