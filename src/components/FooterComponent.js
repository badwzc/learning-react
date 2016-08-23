'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router'
import baseConfig from '../config/base'

require('styles//Footer.scss');

class FooterComponent extends Component {
    render() {
        //获取页脚配置
        let footerLinks = baseConfig.footerLink,
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
