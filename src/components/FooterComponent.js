'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router'
import baseConfig from '../config/base'
// import { Menu, Icon } from 'antd';
import { TabBar } from 'antd-mobile';
import { history } from '../stores/index';
require('styles//Footer.scss');

class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (route) => {
        history.push(route)
        console.log(this.props)
        this.props.setRoute(route)
    }
    render() {
        //获取页脚配置
        let footerLinks = baseConfig.footerLink,
            footerLinkComponent = [],
            current = this.props.currentPage,
            handleClick = this.handleClick;
        footerLinks.forEach(function(link){
            footerLinkComponent.push(
                <TabBar.Item
                    key={link.icon}
                    title={link.title}
                    icon={'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png'}
                    selectedIcon={'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png'}
                    selected={link.icon === current}
                    onPress={handleClick.bind(null, link.address)}
                >
                </TabBar.Item>
            )
        })
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={false}
            >
                {footerLinkComponent}
            </TabBar>

        );
    }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
