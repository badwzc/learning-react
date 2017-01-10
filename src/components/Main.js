require('normalize.css/normalize.css');
require('styles/Main.scss');

import React, { Component, cloneElement } from 'react';

//千牛头部
//千牛页脚
import QnFooter from './FooterComponent';


class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="container">
                {cloneElement(this.props.children, this.props)}
                <QnFooter {...this.props}/>
            </section>
        );
    }
}


Main.defaultProps = {
};

export default Main;
