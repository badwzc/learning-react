'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router'
import baseConfig from '../config/base'

import { Menu, Icon } from 'antd';

require('styles//Footer.scss');

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { current: 'test1' };
    }
    handleClick = (e) => {
        this.setState({
            current: e.key
        });
    }
    render() {
        //获取页脚配置
        let footerLinks = baseConfig.footerLink,
            footerLinkComponent = [];
        footerLinks.forEach(function(link){
            footerLinkComponent.push(
                <Menu.Item  key={link.icon}>
                    <Link to={link.address} className={link.icon}>
                        {link.title}
                    </Link>
                </Menu.Item>
            )
        })
        return (
            <Menu onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                {footerLinkComponent}
            </Menu>
        );
    }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
