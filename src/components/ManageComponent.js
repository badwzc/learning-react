'use strict';

import React from 'react';
import {Link} from 'react-router';
require('styles/Manage.scss');

class ManageComponent extends React.Component {
    renderCampaigns(campaign, i) {
        return(
            <li key={i}  online_status={campaign.online_status}>
                <Link to="/" className="campaign" id={campaign.campaign_id}>
                    <span className="title">{campaign.title}</span>
                    <span className="campaign-status icon-arrows-cw">{campaign.type_name} 计划</span>
                </Link>
            </li>
        )
    }

    render() {
        var campaignList = require('../data/campaignList.json');
        // console.log(campaignList)
        return (
            <div className="manage-component">
                <ul className="list campaign-list">
                    {campaignList.map(this.renderCampaigns)}


                </ul>
            </div>
        );
    }
}

ManageComponent.displayName = 'ManageComponent';

// Uncomment properties you need
// ManageComponent.propTypes = {};
// ManageComponent.defaultProps = {};

export default ManageComponent;
