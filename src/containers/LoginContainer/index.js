import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './../../screens/Login';

import Config from '../../services/Config';

class LoginContainer extends React.Component<Props, State> {
  // constructor(props, state) {
  //   super(props, state);
  //   console.log(this);
  // }

  handleLogin = () => {
    const { navigator } = this.props;
    navigator.push({ screen: `${Config.urlPrefix}.Home` });
  };

  render() {
    const { props } = this;
    return <Login onLogin={this.handleLogin} {...props} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
