'use strict';

import React, { Component } from 'react';
import QnHeader from './HeaderComponent';
import RangeSelect from './RangeSelectComponent';
import CampaignSelect from './CampSelectComponent';
import ChartComponent from './ChartComponent';
import { GET_BALANCE, GET_INDEX_RPT, GET_CAMPAIGNS } from '../constants';
import baseConfig from '../config/base';

require('styles//Index.scss');

class IndexComponent extends Component {
    constructor(props) {
        super(props);
        const { ajaxPostData, range, selectCampaignId } = this.props
        ajaxPostData('account_balance', GET_BALANCE)
        ajaxPostData(`rpt_${selectCampaignId}_${range}`, GET_INDEX_RPT)
        ajaxPostData('campaign_list', GET_CAMPAIGNS)
    }
    tableRender() {
        let { indexRpt, chartKey } = this.props;
        let tableJson = baseConfig.tableConfig;
        let tableComponent = [], trCols = 4, tr = [];
        let chartRender = this.props.setChart;
        tableJson.forEach(function(tdData, index){
            trCols -= tdData.colSpan || 1;
            let value = 0;
            indexRpt.forEach(function(rpt){
                value += rpt[tdData.name];
            })
            tdData.value = value;
            tr.push(
                <td colSpan={tdData.colSpan}
                    key={tdData.name}
                    onClick={chartRender.bind(null, tdData.name)}
                    className={tdData.name === chartKey ? 'selected' : ''}
                >
                    <span className="number">
                        {tdData.value}
                    </span>
                    <span className="title">
                        {tdData.title}
                    </span>
                </td>)
            if(trCols === 0) {
                tableComponent.push(<tr key={index}>{tr}</tr>)
                tr = []
                trCols = 4;
            }
        })
        return tableComponent
    }
    render() {
        return (
            <section className="container">
                <QnHeader {...this.props.balance}/>
                <div className="slector">
                    <CampaignSelect {...this.props}/>
                    <RangeSelect {...this.props}/>
                </div>
                <table className="report-table">
                    <tbody>
                        {this.tableRender()}
                    </tbody>
                </table>
                <ChartComponent {...this.props}/>
            </section>
        );
    }
}

IndexComponent.displayName = 'IndexComponent';

// Uncomment properties you need
// IndexComponent.propTypes = {};
// IndexComponent.defaultProps = {};

export default IndexComponent;
