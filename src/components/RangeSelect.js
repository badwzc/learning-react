import React from 'react';

let ranges = require('../data/ranges.json');
class RangeSelect extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RangeSelect';
    }
    // getInitialState() {
    //     return {
    //         day: 7
    //     };
    // }
    render() {
        let rangeOptions = [], defaultDay = ""
        ranges.forEach(function(value){
            if(value.select) {
                defaultDay = value.day
            }
            rangeOptions.push(
                <option value={value.day} key={value.day}>{value.option}</option>
            )
        })
        return (
            <select defaultValue={defaultDay}>
                {rangeOptions}
            </select>
        );
    }
}

export default RangeSelect;
