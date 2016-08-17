'use strict';

import React from 'react';
import QnHeader from './HeaderComponent';
import RangeSelect from './RangeSelectComponent';
import CampaignSelect from './CampSelectComponent';

require('styles//Index.scss');

class IndexComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            range: 7,
            campaign_id: '-1',
            campaign_title: '全部',
            text_value: '123',
            items: ['hello', 'world', 'click', 'me']
        }
    }
    changeData = (e, options) => {
        this.setState(options)
    }
    inputChange = (e) => {
        this.setState({
            text_value: e.target.value
        })
    }

    render() {
        let tableJson = [
            {
                name: 'cost',
                title: '总花费',
                value: '0.00',
                colSpan: 2
            },
            {
                name: 'pay',
                title: '成交额',
                value: '0.00',
                colSpan: 2
            },
            {
                name: 'impressions',
                title: '展现量',
                value: '0.00'
            },
            {
                name: 'click',
                title: '点击量',
                value: '0.00'
            },
            {
                name: 'fav_count',
                title: '收藏数',
                value: '0.00'
            },
            {
                name: 'pay_count',
                title: '成交数',
                value: '0.00'
            },
            {
                name: 'ctr',
                title: '点击率',
                value: '0.00'
            },
            {
                name: 'cpc',
                title: '平均花费',
                value: '0.00'
            },
            {
                name: 'cvr',
                title: '转化率',
                value: '0.00'
            },
            {
                name: 'roi',
                title: 'ROI',
                value: '0.00'
            }
        ]
        let tableComponent = [], trCols = 4, tr = [], trKey = 0;
        tableJson.forEach(function(tdData){
            trCols -= tdData.colSpan || 1
            tr.push(<td colSpan={tdData.colSpan} key={tdData.name}><span>{tdData.value}</span><span>{tdData.title}</span></td>)
            if(trCols === 0) {
                tableComponent.push(<tr key={trKey++}>{tr}</tr>)
                tr = []
                trCols = 4;
            }
        })
        return (

            <section className="index-component">
                <QnHeader />
                <CampaignSelect handle={this.changeData} defaultValue={this.state.campaign_id} />
                <RangeSelect handle={this.changeData} defaultValue={this.state.range} />
                <p ref="campaignTitle">
                range: {this.state.range}
                title: {this.state.campaign_title}
                campaign_id: {this.state.campaign_id}
                </p>
                <table>
                    <tbody>
                        {tableComponent}
                    </tbody>
                </table>
            </section>
        );
    }
}

IndexComponent.displayName = 'IndexComponent';

// Uncomment properties you need
// IndexComponent.propTypes = {};
// IndexComponent.defaultProps = {};

export default IndexComponent;
