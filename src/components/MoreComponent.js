'use strict';

import React, { Component } from 'react';

require('styles//More.scss');

class MoreComponent extends Component {
  render() {
    return (
      <div className="more-component">
        Please edit src/components///MoreComponent.js to update this component!
      </div>
    );
  }
}

MoreComponent.displayName = 'MoreComponent';

// Uncomment properties you need
// MoreComponent.propTypes = {};
// MoreComponent.defaultProps = {};

export default MoreComponent;
