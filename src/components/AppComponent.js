'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

require('styles/App.scss');

function mapStateToProps(state) {
  return {
    campaigns: state.campaigns,
    balance: state.balance
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps,
    mapDispachToProps)(Main);

export default App;
