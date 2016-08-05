import React from 'react';

//获取店铺数据
let campaigns = require('../data/campaigns.json')

class CampaignSlect extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CampaignSlect';
        // this.changeHandle = this.changeHandle.bind(this)
    }
    //http://stackoverflow.com/questions/35303490/uncaught-typeerror-cannot-read-property-props-of-null
    //TODO 需要用箭头语法
    changeHandle = (e) => {
        this.props.handle(e, {
            campaign_id: e.target.value,
            campaign_title: e.target.options[e.target.options.selectedIndex].text
        });
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
            <select defaultValue={this.props.defaultValue} onChange={this.changeHandle}>
                {campaignOptions}
            </select>
        );
    }
}

export default CampaignSlect;
