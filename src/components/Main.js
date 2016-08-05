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
    constructor(props) {
        super(props);
        this.state = {
            range: 7,
            campaign_id: '-1',
            campaign_title: '全部'
        }
    }
    changeData = (e, options) => {
        this.setState(options)
    }
    render() {
        return (
            <section className="container">
                <QnHeader />
                <CampaignSelect handle={this.changeData} defaultValue={this.state.campaign_id} />
                <RangeSelect handle={this.changeData} defaultValue={this.state.range} />
                <p ref="campaignTitle">
                range: {this.state.range}
                title: {this.state.campaign_title}
                campaign_id: {this.state.campaign_id}
                </p>
                <QnFooter />
            </section>
        );
    }
}


AppComponent.defaultProps = {
};

export default AppComponent;