'use strict';

import React, { Component } from 'react';
import { Picker, List } from 'antd-mobile';
// import { Select } from 'antd';
// const Option = Select.Option;
require('styles//CampSelect.scss');

class CampSelectComponent extends Component {
    //http://stackoverflow.com/questions/35303490/uncaught-typeerror-cannot-read-property-props-of-null
    //TODO 需要用箭头语法
    changeHandle = (value) => {
        this.props.selectCampaign(value - 0)
    }
    renderCampaignOptions = (campaign) => ({
        value: campaign.campaign_id,
        label: campaign.title
    })

    render() {
        let listData = [{campaign_id: -1, title: '整店'}],
            selectCampaignId = this.props.selectCampaignId,
            changeHandle = this.changeHandle;
        listData = listData.concat(this.props.campaigns);
        return (
            <List className="campaign-selector">
                <Picker
                    data={listData.map(this.renderCampaignOptions)}
                    value={[selectCampaignId]}
                    onPickerChange={(v)=>changeHandle(v)}
                >
                    <List.Item arrow="horizontal">选择计划</List.Item>
                </Picker>
            </List>

        );
    }
}

CampSelectComponent.displayName = 'CampSelectComponent';

// Uncomment properties you need
// CampSelectComponent.propTypes = {};
// CampSelectComponent.defaultProps = {};

export default CampSelectComponent;
