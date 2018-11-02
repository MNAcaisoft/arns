import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SideBar from './../../screens/SideBar';

class SideBarContainer extends React.Component<Props, State> {
  static propTypes = {
    logout: PropTypes.func,
    goToScreen: PropTypes.func,
    toggleDrawer: PropTypes.func,
  };
  render() {
    const { logout, goToScreen, toggleDrawer, navigator } = this.props;
    return <SideBar onLogout={logout} onGoToScreen={goToScreen} onToggleDrawer={toggleDrawer} navigator={navigator} />;
  }
}

const mapDispatchToProps = dispatch => ({
  logout: dispatch.auth.logout,
  goToScreen: dispatch.navigation.goToScreen,
  toggleDrawer: dispatch.navigation.toggleDrawer,
});

export default connect(
  null,
  mapDispatchToProps
)(SideBarContainer);
