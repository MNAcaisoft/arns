import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import Login from './../../screens/Login';

class LoginContainer extends React.Component<Props, State> {
  static navigatorStyle = {
    navBarHidden: true,
  };
  // constructor(props, state) {
  //   super(props, state);
  //   console.log(this);
  // }

  render() {
    const { props } = this;
    return (
      <Container>
        <Content>
          <Login {...props} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(LoginContainer);
