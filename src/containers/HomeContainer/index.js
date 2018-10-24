import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './../../screens/Home';

class HomeContainer extends React.Component<Props, State> {
  render() {
    const { navigator } = this.props;
    return <Home navigator={navigator} />;
  }
}

export default connect(
  null,
  null
)(HomeContainer);
