'use strict';

import React from 'react';

require('styles//Header.scss');

class HeaderComponent extends React.Component {
    componentDidMount() {
        setTimeout(function(){
            let balance = require('../data/account_balance.json')
            this.props.getBalance(balance.data)
        }.bind(this), 3000)
    }
    render() {
        let logo = require('../images/Logo_80x80.png')
        return (
            <header>
                <img src={logo} className="logo"/>
                <h1>账户余额
                    <span id="balance">{this.props.balance}</span>
                </h1>
            </header>
        );
    }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
