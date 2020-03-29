import React from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends React.Component {
    render() {
        return (
            <div>
                <Die />
            </div>
        );
    }
}

export default RollDice;
