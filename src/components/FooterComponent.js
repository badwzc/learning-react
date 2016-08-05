'use strict';

import React from 'react';

require('styles//Footer.sass');

class FooterComponent extends React.Component {
    render() {
        //获取页脚配置
        let footerLinks = require('../data/footerLinks.json'),
            footerLinkComponent = [];
        footerLinks.forEach(function(link){
            footerLinkComponent.push(
                <a href={link.address} key={link.icon} className={link.icon}>
                    {link.title}
                </a>
            )
        })
        return (
            <footer>
                <nav className="footer-nav">
                    {footerLinkComponent}
                </nav>
            </footer>
        );
    }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
