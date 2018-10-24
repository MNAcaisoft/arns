import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Profile from './../../screens/Profile';

class ProfileContainer extends React.Component<Props, State> {
  render() {
    const { props } = this;
    return <Profile {...props} />;
  }
}

export default connect(
  null,
  null
)(ProfileContainer);
