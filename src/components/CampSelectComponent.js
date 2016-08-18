'use strict';

import React from 'react';

require('styles//CampSelect.scss');

class CampSelectComponent extends React.Component {
    //http://stackoverflow.com/questions/35303490/uncaught-typeerror-cannot-read-property-props-of-null
    //TODO 需要用箭头语法
    changeHandle = (e) => {
        this.props.handle(e, {
            campaign_id: e.target.value,
            campaign_title: e.target.options[e.target.options.selectedIndex].text
        });
    }
    componentWillMount() {
        //获取店铺数据
        setTimeout(function(){
            let campaigns = require('../data/campaigns.json')
            this.props.getCampaigns(campaigns)
        }.bind(this), 500)
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
            <select className="report_select" defaultValue={this.props.defaultValue} onChange={this.changeHandle}>
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
