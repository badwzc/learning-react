require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//千牛头部
import QnHeader from './HeaderComponent';
//千牛页脚
import QnFooter from './FooterComponent';



class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="container">
                <QnHeader />
                {this.props.children}
                <QnFooter />
            </section>
        );
    }
}


AppComponent.defaultProps = {
};

export default AppComponent;
