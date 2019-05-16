import React, { Component } from 'react';

class MoreInfo extends Component {
    render() {
        const { onClick } = this.props;
        return (
            <div>
                <a href="https://tinder-cards.firebaseapp.com">Cliquez sur le lien</a>
                <br />
                <button onClick={onClick}>Close Information </button>
            </div>
        );
    }
}

export default MoreInfo;
