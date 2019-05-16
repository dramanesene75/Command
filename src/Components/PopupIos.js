import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class PopupIos extends Component {
    isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    isInStandaloneMode = () => 'standalone' in window.navigator && window.navigator.standalone;

    showPopup = () => {
        return this.isIos() && !this.isInStandaloneMode();
    };

    render() {
        return (
            <Popup open={this.showPopup()} position={'bottom center'}>
                <div style={{ color: 'blue' }}>You can Install this app by cliking in ↑ then 'Add to HomeScreen'</div>
            </Popup>
        );
    }
}

export default PopupIos;
