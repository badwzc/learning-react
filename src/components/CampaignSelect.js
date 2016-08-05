import React from 'react';

//获取店铺数据
let campaigns = require('../data/campaigns.json')

class CampaignSlect extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CampaignSlect';
    }
    render() {
        let campaignOptions = [<option key="-1" value="-1">整店</option>];
        campaigns.forEach(function(camp){
            campaignOptions.push(
                <option key={camp.campaign_id} value={camp.campaign_id}>
                    {camp.title}
                </option>
            )
        });
        return (
            <select>
                {campaignOptions}
            </select>
        );
    }
}

export default CampaignSlect;
