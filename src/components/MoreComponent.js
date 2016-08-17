'use strict';

import React from 'react';

require('styles//More.scss');

class MoreComponent extends React.Component {
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
