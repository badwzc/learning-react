'use strict';

import React, { Component } from 'react';

require('styles//RangeSelect.scss');

class RangeSelectComponent extends Component {
    changeHandle = (e) => {
        this.props.setRange(e.target.value - 0)
    }
    render() {
        let ranges = require('../data/ranges.json')
        let rangeOptions = [];
        ranges.forEach(function(value){
            rangeOptions.push(
                <option value={value.day} key={value.day}>
                    {value.option}
                </option>
            )
        })
        return (
            <select className="report_range" defaultValue={this.props.range} onChange={this.changeHandle}>
                {rangeOptions}
            </select>
        );
    }
}

RangeSelectComponent.displayName = 'RangeSelectComponent';

// Uncomment properties you need
// RangeSelectComponent.propTypes = {};
// RangeSelectComponent.defaultProps = {};

export default RangeSelectComponent;
