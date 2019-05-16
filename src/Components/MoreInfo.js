import React, { Component } from 'react';

class MoreInfo extends Component {
    render() {
        const { onClick } = this.props;
        return (
            <div>
                <a href="https://us-central1-digitalsignage-2abb1.cloudfunctions.net/newCommand?uid=116554511&swipe=right">
                    Cliquez sur le lien
                </a>
                <br />
                <button onClick={onClick}>Close Information </button>
            </div>
        );
    }
}

export default MoreInfo;
