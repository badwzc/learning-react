'use strict';

import React, { Component } from 'react';
import { GET_CAMPAIGNS } from '../constants';
require('styles//CampSelect.scss');

class CampSelectComponent extends Component {
    //http://stackoverflow.com/questions/35303490/uncaught-typeerror-cannot-read-property-props-of-null
    //TODO 需要用箭头语法
    changeHandle = (e) => {
        this.props.selectCampaign(e.target.value - 0)
    }
    componentDidMount() {
        const { ajaxPostData } = this.props;
        ajaxPostData('campaign_list', GET_CAMPAIGNS)

    }
    renderCampaignOptions(campaign, i) {
        return(
            <option key={i} value={campaign.campaign_id}>
                {campaign.title}
            </option>
        )
    }
    render() {
        return (
            <select className="report_select" defaultValue={this.selectCampaignId} onChange={this.changeHandle}>
                <option key="-1" value="-1">整店</option>
                {this.props.campaigns.map(this.renderCampaignOptions)}
            </select>
        );
    }
}

CampSelectComponent.displayName = 'CampSelectComponent';

// Uncomment properties you need
// CampSelectComponent.propTypes = {};
// CampSelectComponent.defaultProps = {};

export default CampSelectComponent;
