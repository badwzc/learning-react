'use strict';

import React, { Component } from 'react';
import {Link} from 'react-router';
require('styles/Manage.scss');

class ManageComponent extends Component {
    renderCampaigns(campaign) {
        return(
            <li key={campaign.campaign_id}>
                <Link to={`/campaign/${campaign.campaign_id}`} className="campaign" id={campaign.campaign_id}>
                    <span className="title">{campaign.title}</span>
                    <span className="campaign-status icon-arrows-cw">{campaign.type_name}计划</span>
                </Link>
            </li>
        )
    }

    render() {
        return (
            <ul className="list campaign-list">
                {this.props.campaigns.map(this.renderCampaigns)}
            </ul>
        );
    }
}

ManageComponent.displayName = 'ManageComponent';

// Uncomment properties you need
// ManageComponent.propTypes = {};
// ManageComponent.defaultProps = {};

export default ManageComponent;
