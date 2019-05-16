import React, { Component } from 'react';
import Swing from 'react-swing';

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

    swipe = e => {
        const { swipeUp } = this.props;
        if (!!e.throwDirection) {
            if (e.throwDirection.toString().includes('UP')) {
                swipeUp();
            } else if (e.throwDirection.toString().includes('LEFT')) {
                this.setState(prevState => ({
                    currentIndex: Math.max(0, prevState.currentIndex - 1)
                }));
            } else if (e.throwDirection.toString().includes('RIGHT')) {
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
