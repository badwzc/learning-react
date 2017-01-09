'use strict';

import React, { Component } from 'react';
import { Select } from 'antd';
const Option = Select.Option;

require('styles//RangeSelect.scss');

class RangeSelectComponent extends Component {
    changeHandle = (value) => {
        this.props.setRange(value - 0)
    }
    render() {
        let ranges = require('../data/ranges.json')
        let rangeOptions = [];
        ranges.forEach(function(value){
            rangeOptions.push(
                <Option value={value.day + ''} key={value.day}>
                    {value.option}
                </Option>
            )
        })
        return (
            <Select className="report_range"
                    size="large"
                    defaultValue={this.props.range + ''}
                    onChange = {this.changeHandle}>
                {rangeOptions}
            </Select>
        );
    }
}

RangeSelectComponent.displayName = 'RangeSelectComponent';

// Uncomment properties you need
// RangeSelectComponent.propTypes = {};
// RangeSelectComponent.defaultProps = {};

export default RangeSelectComponent;
