import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Login from './../../screens/Login';

class LoginContainer extends React.Component<Props, State> {
  // static navigatorStyle = {
  //   navBarHidden: true,
  // };
  static propTypes = {
    cokolwiek: PropTypes.string,
  };

  // constructor(props, state) {
  //   super(props, state);
  //   console.log(this);
  // }

  render() {
    const { props } = this;
    console.log(props);
    return (
      <View style={{ flex: 1 }}>
        <Login {...props} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cokolwiek: state.app.root,
});

export default connect(
  mapStateToProps,
  null
)(LoginContainer);
