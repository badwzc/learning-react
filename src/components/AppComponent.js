'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

require('styles/App.scss');

//将state状态绑定到prop上 使用时直接使用this.props
function mapStateToProps(state) {
    const {
        campaigns, //计划列表
        balance, //账户余额
        range, //报表天数
        selectCampaign, //首页选择的计划
        reports //报表合集
    } = state

    const {
        isFetching,
        rpts: rpts
    } = /*reports[selectCampaign] || */{
        isFetching: true,
        rpts: []
    }

    return {
        campaigns,
        balance,
        range,
        selectCampaign,
        rpts
    }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps,
    mapDispachToProps)(Main);

export default App;
