'use strict';

import React from 'react';

require('styles//RangeSelect.scss');

class RangeSelectComponent extends React.Component {
    changeHandle = (e) => {
        this.props.handle(e, {
            range: e.target.value
        })
    }
    render() {
        let ranges = require('../data/ranges.json')
        let rangeOptions = [];
        ranges.forEach(function(value){
            rangeOptions.push(
                <option value={value.day} key={value.day}>{value.option}</option>
            )
        })
        return (
            <select defaultValue={this.props.defaultValue} onChange={this.changeHandle}>
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