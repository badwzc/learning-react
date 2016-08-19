require('normalize.css/normalize.css');
require('styles/Main.scss');

import React from 'react';

//千牛头部
//千牛页脚
import QnFooter from './FooterComponent';


class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="container">
                {React.cloneElement(this.props.children, this.props)}
                <QnFooter />
            </section>
        );
    }
}


Main.defaultProps = {
};

export default Main;
