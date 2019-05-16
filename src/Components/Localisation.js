import React, { Component } from 'react';
import { uidDecode } from '../Config/config';

class PopupIos extends Component {
    state = {
        site: '',
        confidentiality: ''
    };
    componentDidMount() {
        const { uid } = this.props;
        if (uidDecode[uid]) {
            const { site, confidentiality } = uidDecode[uid];
            this.setState({ site, confidentiality });
        }
    }

    render() {
        const { site, confidentiality } = this.state;
        return (
            <h2>
                {site} - {confidentiality}
            </h2>
        );
    }
}

export default PopupIos;
