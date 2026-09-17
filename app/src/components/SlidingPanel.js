import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

class SlidingPanel extends Component {
  static propTypes = {
    panelOpen: PropTypes.bool.isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  static defaultProps = {
    panelOpen: false
  }

  render() {
    const { height, panelOpen } = this.props;
    return (
      <div className={classNames('sliding-panel', {
        open: panelOpen
      })} style={{ height }}>
        {this.props.children}
      </div>
    );
  }
}

export default SlidingPanel;
