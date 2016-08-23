'use strict';

import React, { Component } from 'react';
import QnHeader from './HeaderComponent';
import RangeSelect from './RangeSelectComponent';
import CampaignSelect from './CampSelectComponent';
import { GET_INDEX_RPT } from '../constants';
import baseConfig from '../config/base';

require('styles//Index.scss');

class IndexComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { ajaxPostData, range, selectCampaignId } = this.props
        ajaxPostData(`rpt_${selectCampaignId}_${range}`, GET_INDEX_RPT)
    }

    tableRender() {
        let { indexRpt } = this.props
        let tableJson = baseConfig.tableConfig
        let tableComponent = [], trCols = 4, tr = [];
        let indexRptLen = indexRptLen.length

        tableJson.forEach(function(tdData, index){
            trCols -= tdData.colSpan || 1
            let value = 0;
            indexRpt.forEach(function(rpt, index){
                value += rpt
            })
            tr.push(<td colSpan={tdData.colSpan} key={tdData.name}><span className="number">{tdData.value}</span><span className="title">{tdData.title}</span></td>)
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
            <section className="index-component">
                <QnHeader {...this.props}/>
                <CampaignSelect {...this.props}/>
                <RangeSelect {...this.props}/>
                <table className="report-table">
                    <tbody>
                        {this.tableRender()}
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
