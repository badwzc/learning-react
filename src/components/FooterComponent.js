'use strict';

import React from 'react';
import { Link } from 'react-router'

require('styles//Footer.scss');

class FooterComponent extends React.Component {
    render() {
        //获取页脚配置
        let footerLinks = require('../data/footerLinks.json'),
            footerLinkComponent = [];
        footerLinks.forEach(function(link){
            footerLinkComponent.push(
                <Link to={link.address} key={link.icon} className={link.icon}>
                    {link.title}
                </Link>
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
