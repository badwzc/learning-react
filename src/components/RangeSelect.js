import React from 'react';

let ranges = require('../data/ranges.json');
class RangeSelect extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RangeSelect';
        this.changeHandle = this.changeHandle.bind(this)
    }
    changeHandle(e){
        this.props.handle(e, {
            range: e.target.value
        })
    }
    render() {
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

export default RangeSelect;
