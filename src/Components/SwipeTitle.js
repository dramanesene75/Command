import React, { Component } from 'react';
import Swing from 'react-swing';
import { ADDR, direction } from '../Config/config';
class PopupIos extends Component {
    state = {
        titles: ['Previous Title', 'Current Title', 'Next Title'],
        currentIndex: 1,
        config: {
            minThrowOutDistance: 0,
            maxThrowOutDistance: 1,
            maxRotation: 5
        }
    };
    writeSwipe = direction => {
        const XHR = new XMLHttpRequest();
        const { uid } = this.props;

        const addr = ADDR.cloudaddr + uid + ADDR.swipe + direction;
        XHR.open('POST', addr);
        XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        XHR.send('');
    };
    swipe = e => {
        const { swipeUp } = this.props;
        if (!!e.throwDirection) {
            if (e.throwDirection.toString().includes(direction.up)) {
                this.writeSwipe(direction.up);
                swipeUp();
            } else if (e.throwDirection.toString().includes(direction.left)) {
                this.writeSwipe(direction.left);
                this.setState(prevState => ({
                    currentIndex: Math.max(0, prevState.currentIndex - 1)
                }));
            } else if (e.throwDirection.toString().includes(direction.right)) {
                this.writeSwipe(direction.right);
                this.setState(prevState => ({
                    currentIndex: Math.min(2, prevState.currentIndex + 1)
                }));
            }
        }
    };
    render() {
        const { titles, currentIndex, config } = this.state;
        return (
            <Swing className="sw-notification" tagName="div" ref="stack" throwout={this.swipe} config={config}>
                <div width="auto" className="Title" ref="card">
                    <h1>{titles[currentIndex]} </h1>
                </div>
            </Swing>
        );
    }
}

export default PopupIos;
