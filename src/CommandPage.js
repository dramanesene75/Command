import React, { Component } from 'react';
import './App.css';
import PopupIos from './Components/PopupIos';
import SwipeTitle from './Components/SwipeTitle';
import MoreInfo from './Components/MoreInfo';
import Localisation from './Components/Localisation';
import Home from './Components/Home';
import { uidDecode } from './Config/config';

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
        const { match } = this.props;
        const { uid } = match.params;
        const validUId = !!uidDecode[uid];
        console.log(validUId);
        return (
            <div>
                {validUId ? (
                    <div className="App">
                        <Home />
                        <Localisation uid={uid} />
                        <SwipeTitle uid={uid} swipeUp={this.swipeUp} />
                        {popup && <PopupIos />}
                        {moreInfo && <MoreInfo onClick={this.onClickCloseInfo} />}
                    </div>
                ) : (
                    <Home />
                )}
            </div>
        );
    }
}

export default CommandPage;
