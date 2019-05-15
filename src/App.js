import React, { Component } from 'react';
import './App.css';
import logo from './ViseoLogo.png';
import Popup from 'reactjs-popup';
import Swing from 'react-swing';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasUpdate: undefined,
            showInstallMessage: true,
            mounted: true,
            moreInfo: false,
            popup: false,
            titles: ['Previous Title', 'Current Title', 'Next Title'],
            currentIndex: 1
        };
    }

    componentWillMount() {
        //hasUpdate !== undefined &&
        if (window.swObservable) {
            window.swObservable.subscribe(hasUpdate => this.setState({ hasUpdate }));
        }
    }
    // Detects if device is on iOS
    isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    isInStandaloneMode = () => 'standalone' in window.navigator && window.navigator.standalone;

    showPopup = () => {
        return this.isIos() && !this.isInStandaloneMode();
    };

    swipe = e => {
        if (!!e.throwDirection) {
            if (e.throwDirection.toString().includes('UP')) {
                this.setState({ moreInfo: true });
            } else if (e.throwDirection.toString().includes('LEFT')) {
                this.setState(prevState => ({
                    currentIndex: Math.max(0, prevState.currentIndex - 1)
                }));
            } else if (e.throwDirection.toString().includes('RIGHT')) {
                this.setState(prevState => ({
                    currentIndex: Math.min(2, prevState.currentIndex + 1)
                }));
            } else if (e.throwDirection.toString().includes('DOWN')) {
                this.setState({ moreInfo: false });
            }
        }
    };
    onClickMoreInfo = () => {
        this.setState({ moreInfo: false, popup: true });
    };
    render() {
        const { titles, currentIndex, moreInfo, popup } = this.state;
        const config = {
            minThrowOutDistance: 0,
            maxThrowOutDistance: 1,
            maxRotation: 5
        };
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>Commande ta télévision</h3>
                    <h2>Boulogne RDP - WORKSPACE</h2>
                    <Swing className="sw-notification" tagName="div" ref="stack" throwout={this.swipe} config={config}>
                        <div width="auto" className="Title" ref="card">
                            <h1>{titles[currentIndex]} </h1>
                        </div>
                    </Swing>
                    <Popup open={popup && this.showPopup()} position="bottom left">
                        <div style={{ color: 'blue' }}>
                            You can Install this app by cliking in ↑ then + 'Add to HomeScreen'
                        </div>
                    </Popup>
                    {moreInfo && (
                        <div>
                            <a href="https://tinder-cards.firebaseapp.com">Vous pouvez Swipper de nouveau</a>
                            <button onClick={this.onClickMoreInfo}>Close Information </button>
                        </div>
                    )}
                </header>
            </div>
        );
    }
}

export default App;
