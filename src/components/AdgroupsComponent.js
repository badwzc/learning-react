'use strict';

import React from 'react';
import { GET_ADGROUPS } from '../constants';

require('styles//Adgroups.scss');

class AdgroupsComponent extends React.Component {
    constructor(props){
        super(props)
        this.props.ajaxPostData('adgroup_9214478', GET_ADGROUPS)
    }
    // componentWillMount() {
    //     // const { ajaxPostData/*, params:{campaignId}*/ } = this.props
    //     // ajaxPostData('adgroup_9214478', GET_ADGROUPS)

    // }
    adgroupRender(adgroup, i) {
        return(
            <li key={adgroup.adgroup_id} id={adgroup.adgroup_id}>
                <div className="list-item">
                    <div className="img">
                        <img src={`${adgroup.pic_url}_60x60.jpg`} />
                    </div>
                    <div className="content">
                        <p className="title">{adgroup.title}</p>
                        <p className="price">￥{adgroup.price}</p>
                    </div>
                    <span onClick={this.props.changeOnlineStatus.bind(null, i)} className="adgroup-status">{adgroup.online_status === 'online' ? '推广中' : '暂停中'}</span>
                </div>
            </li>
        )

    }
    render() {
        return (
            <ul className="adgroups-component list product-list adgroup-list">
                {this.props.adgroups.map(this.adgroupRender.bind(this))}
            </ul>
        );
    }
}

AdgroupsComponent.displayName = 'AdgroupsComponent';

// Uncomment properties you need
// AdgroupsComponent.propTypes = {};
// AdgroupsComponent.defaultProps = {};

export default AdgroupsComponent;
