import React from 'react';

class QnFooter extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'QnFooter';
    }
    render() {
        //获取页脚配置
        let footerLinks = require('../data/footerLinks.json'),
            footerLinkComponent = [];
        console.log(footerLinks)
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

export default QnFooter;
