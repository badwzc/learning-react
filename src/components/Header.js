import React from 'react';
var logo = require('../images/Logo_80x80.png');
class QnHeader extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'QnHeader';
    }
    render() {
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

export default QnHeader;
