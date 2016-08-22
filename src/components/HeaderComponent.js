'use strict';

import React, { Component } from 'react';

require('styles//Header.scss');

class HeaderComponent extends Component {
    componentDidMount() {
        setTimeout(function(){
            let balance = require('../data/account_balance.json')
            this.props.getBalance(balance.data)
        }.bind(this), 3000)
    }
    componentDidMount() {
        const {  selectedReddit, fetchPostsIfNeeded } = this.props
        fetchPostsIfNeeded('account_balance', '../data/')
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
