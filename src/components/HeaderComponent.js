'use strict';

import React from 'react';

require('styles//Header.sass');

class HeaderComponent extends React.Component {
    render() {
        let logo = require('../images/Logo_80x80.png')
        return (
            <header>
                <img src={logo} className="logo"/>
                <h1>账户余额
                    <span id="balance">-1.9</span>
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
