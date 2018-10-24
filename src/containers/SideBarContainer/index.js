import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SideBar from './../../screens/SideBar';

class SideBarContainer extends React.Component<Props, State> {
  static propTypes = {
    logout: PropTypes.func,
  };
  render() {
    const { logout, navigator } = this.props;
    return <SideBar onLogout={logout} navigator={navigator} />;
  }
}

const mapDispatchToProps = dispatch => ({
  logout: dispatch.auth.logout,
});

export default connect(
  null,
  mapDispatchToProps
)(SideBarContainer);
