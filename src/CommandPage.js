import React, { Component } from 'react';
import './App.css';
import PopupIos from './Components/PopupIos';
import SwipeTitle from './Components/SwipeTitle';
import MoreInfo from './Components/MoreInfo';
import Home from './Components/Home';
class CommandPage extends Component {
    state = {
        hasUpdate: undefined,
        showInstallMessage: true,
        mounted: true,
        moreInfo: false,
        popup: false
    };

    onClickCloseInfo = () => {
        this.setState({ moreInfo: false, popup: true });
    };
    swipeUp = () => {
        this.setState({ moreInfo: true });
    };
    render() {
        const { moreInfo, popup } = this.state;
        return (
            <div className="App">
                <Home />
                <SwipeTitle swipeUp={this.swipeUp} />
                {popup && <PopupIos />}
                {moreInfo && <MoreInfo onClick={this.onClickCloseInfo} />}
            </div>
        );
    }
}

export default CommandPage;
