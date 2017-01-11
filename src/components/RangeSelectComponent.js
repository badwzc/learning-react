'use strict';

import React, { Component } from 'react';
import { Picker, List } from 'antd-mobile';

require('styles//RangeSelect.scss');

class RangeSelectComponent extends Component {
    changeHandle = (value) => {
        this.props.setRange(value - 0)
    }

    render() {
        let rangeOptions = [{
                'value': 0,
                'label': '今日实时'
            },
            {
                'value': 1,
                'label': '昨天'
            },
            {
                'value': 7,
                'label': '7天'
            },
            {
                'value': 15,
                'label': '15天'
            }],
            range = this.props.range,
            changeHandle = this.changeHandle;

        return (
            <List className='range-selector'>
                <Picker
                    data={rangeOptions}
                    value={[range]}
                    onPickerChange={(v)=>changeHandle(v)}
                >
                    <List.Item arrow='horizontal'>选择日期</List.Item>
                </Picker>
            </List>
        );
    }
}

RangeSelectComponent.displayName = 'RangeSelectComponent';

// Uncomment properties you need
// RangeSelectComponent.propTypes = {};
// RangeSelectComponent.defaultProps = {};

export default RangeSelectComponent;
