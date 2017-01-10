'use strict';

import React from 'react';
import { Line } from 'react-chartjs';
require('styles//Chart.scss');
const keyMap = {
    cost : '总花费',
    impressions : '展现量',
    click : '点击量',
    ctr : '点击率',
    cpc : '平均花费',
    pay : '成交额',
    pay_count : '成交数',
    fav_count : '收藏数',
    cvr : '转化率',
    roi : 'ROI'
}
class ChartComponent extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount() {
    }

    render() {
        console.log(this.props.indexRpt)
        let data = [], labels = [];
        let { chartKey, indexRpt } = this.props
        indexRpt.forEach(function(val){
            data.push(val[chartKey]);
            labels.push(val.date.substr(5))
        })

        let chartData = {
            labels: labels,
            datasets: [{
                label: keyMap[chartKey],
                data: data,
                borderWidth: 1,
                fill: false,
                fillColor: 'rgba(255,255,255,0)',
                strokeColor: 'rgba(43,173,233,1)',
                pointColor: 'rgba(220,220,220,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
            }]
        };
        let options = {
            backgroundColors: ['rgba(255,255,255,1)'],
            responsive: true
        };
        return (
            <div className='chart-container'>
                <Line data = {chartData} options={options}/>
            </div>
        );
  }
}

ChartComponent.displayName = 'ChartComponent';

// Uncomment properties you need
// ChartComponent.propTypes = {};
// ChartComponent.defaultProps = {};

export default ChartComponent;
