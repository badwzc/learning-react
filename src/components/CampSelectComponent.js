'use strict';

import React, { Component } from 'react';
import { GET_CAMPAIGNS } from '../constants';
require('styles//CampSelect.scss');

import { Select } from 'antd';
const Option = Select.Option;

class CampSelectComponent extends Component {
    //http://stackoverflow.com/questions/35303490/uncaught-typeerror-cannot-read-property-props-of-null
    //TODO 需要用箭头语法

    changeHandle = (value) => {
        this.props.selectCampaign(value - 0)
    }
    componentDidMount() {
        const { ajaxPostData } = this.props;
        ajaxPostData('campaign_list', GET_CAMPAIGNS)

    }
    renderCampaignOptions(campaign, i) {
        return(
            <Option key={i} value={campaign.campaign_id + ''}>
                {campaign.title}
            </Option>
        )
    }
    render() {
        return (
            <Select className="report_select"
                    size="large"
                    defaultValue={this.props.selectCampaignId + ''}
                    onChange={this.changeHandle}>
                <Option key="-1" value="-1">整店</Option>
                {this.props.campaigns.map(this.renderCampaignOptions)}
            </Select>
        );
    }
}

CampSelectComponent.displayName = 'CampSelectComponent';

// Uncomment properties you need
// CampSelectComponent.propTypes = {};
// CampSelectComponent.defaultProps = {};

export default CampSelectComponent;
