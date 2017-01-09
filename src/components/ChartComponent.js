'use strict';

import React from 'react';
import Chart from 'chart.js';
import { Line } from 'react-chartjs';
require('styles//Chart.scss');
const keyMap = {
    cost : '总花费',
    impressions : '展现量',
    click : '点击量',
    ctr : '点击率',
    cpc : '点击单价',
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
        let chartData = {
            labels: [keyMap[this.props.chartKey]],
            datasets: [{
                label: keyMap[this.props.chartKey],
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        }
        let option = {
            scales: {
                xaxis: [{
                    ticks: {
                        // Create scientific notation labels
                        callback: function(value, index, values) {
                            return dates[Math.round(value)];
                        }
                    }
                }]
            }
        }
        return (
            <Line data = {chartData} options = {option} width="100%" height="250"/>
        );
  }
}

ChartComponent.displayName = 'ChartComponent';

// Uncomment properties you need
// ChartComponent.propTypes = {};
// ChartComponent.defaultProps = {};

export default ChartComponent;
