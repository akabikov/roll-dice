import React from 'react';
import './RollDice.css';
import Die from './Die';

const MAX_NUM = 6;

class RollDice extends React.Component {
    
    state = {die1 : 1,
             die2 : 1}

    roll = () => {
        this.setState({die1 : this.getNum(),
                       die2 : this.getNum(),
                    });
    }

    getNum() {
        return Math.floor(Math.random() * MAX_NUM) + 1;
    }
    
    render() {
        return (
            <div>
                <Die num={this.state.die1}/>
                <Die num={this.state.die2}/>
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        );
    }
}

export default RollDice;
