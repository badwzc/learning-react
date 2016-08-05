require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//千牛头部
import QnHeader from './Header';
//千牛页脚
import QnFooter from './Footer';

import RangeSelect from './RangeSelect';
import CampaignSelect from './CampaignSelect';

class AppComponent extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <section className="container">
                <QnHeader></QnHeader>
                <CampaignSelect></CampaignSelect>
                <RangeSelect></RangeSelect>
                <QnFooter></QnFooter>
            </section>
        );
    }
}


AppComponent.defaultProps = {
};

export default AppComponent;