'use strict';

import React from 'react';

import { fetchPostsIfNeeded } from '../actions/syncActions'

require('styles//Test.scss');

class TestComponent extends React.Component {
  componentDidMount() {
    const { dispatch, selectedReddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedReddit))
    }
  }
  render() {
    return (
      <div className="test-component">
        Please edit src/components///TestComponent.js to update this component!
      </div>
    );
  }
}

TestComponent.displayName = 'TestComponent';

// Uncomment properties you need
// TestComponent.propTypes = {};
// TestComponent.defaultProps = {};

export default TestComponent;
