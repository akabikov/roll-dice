import React from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends React.Component {
    render() {
        return (
            <div>
                <Die num="6"/>
            </div>
        );
    }
}

export default RollDice;
