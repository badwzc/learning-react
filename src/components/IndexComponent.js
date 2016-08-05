'use strict';

import React from 'react';
import RangeSelect from './RangeSelectComponent';
import CampaignSelect from './CampSelectComponent';

require('styles//Index.scss');

class IndexComponent extends React.Component {
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
            <section className="index-component">
                <CampaignSelect handle={this.changeData} defaultValue={this.state.campaign_id} />
                <RangeSelect handle={this.changeData} defaultValue={this.state.range} />
                <p ref="campaignTitle">
                range: {this.state.range}
                title: {this.state.campaign_title}
                campaign_id: {this.state.campaign_id}
                </p>
            </section>
        );
    }
}

IndexComponent.displayName = 'IndexComponent';

// Uncomment properties you need
// IndexComponent.propTypes = {};
// IndexComponent.defaultProps = {};

export default IndexComponent;
