import React from 'react';

export class CounterDisplay extends React.Component {
    render() { 
        return (
            <div>
                <h1>count: {this.props.count}</h1>
            </div>
            
        );
    }
}