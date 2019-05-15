import React, { Component } from 'react';
import Swipe from 'react-swipe';

class MySwipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Current Title'
        };
    }

    onSwipeStart(event) {
        this.setState({ title: 'Je bouge' });
    }

    onSwipeMove(position, event) {
        console.log(`Moved ${position.x} pixels horizontally`, event);
        console.log(`Moved ${position.y} pixels vertically`, event);
    }

    onSwipeEnd(event) {
        this.setState({ title: 'Je suis arrive' });
    }

    render() {
        const boxStyle = {
            width: '100%',
            height: '300px',
            border: '1px solid black',
            background: '#ccc',
            padding: '20px',
            fontSize: '3em'
        };
        const { title } = this.state;
        return (
            <Swipe onSwipeStart={this.onSwipeStart} onSwipeMove={this.onSwipeMove} onSwipeEnd={this.onSwipeEnd}>
                <div style={boxStyle}>{title}</div>
            </Swipe>
        );
    }
}

export default MySwipper;
