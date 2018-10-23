import * as React from 'react';
import { Text, View } from 'react-native';

// import styles from './styles';

class Login extends React.Component<Props, State> {
  render() {
    console.log('login', this.props);
    return (
      <View>
        <Text>Login 1</Text>
      </View>
    );
  }
}

export default Login;
