'use strict';

import React from 'react';
import {Link} from 'react-router';
require('styles/Manage.scss');

class ManageComponent extends React.Component {
    renderCampaigns(campaign) {
        return(
            <li key={campaign.campaign_id}>
                <Link to="/" className="campaign" id={campaign.campaign_id}>
                    <span className="title">{campaign.title}</span>
                    <span className="campaign-status icon-arrows-cw">{campaign.type_name}计划</span>
                </Link>
            </li>
        )
    }

    render() {
        return (
            <div className="manage-component">
                <ul className="list campaign-list">
                    {this.props.campaigns.map(this.renderCampaigns)}
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
