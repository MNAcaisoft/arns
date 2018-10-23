import * as React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Login from './../../screens/Login';

class LoginContainer extends React.Component<Props, State> {
  // static navigatorStyle = {
  //   navBarHidden: true,
  // };

  render() {
    const { props } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Login {...props} />
      </View>
    );
  }
}

export default connect(
  null,
  null
)(LoginContainer);
