import * as React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Button, Text, Spinner, View } from 'native-base';

import styles from './styles';

class Login extends React.Component<Props, State> {
  static propTypes = {
    onLogin: PropTypes.func,
    loginForm: PropTypes.object,
    loading: PropTypes.bool,
  };

  render() {
    const { onLogin, loginForm, loading } = this.props;
    return (
      <Container>
        <Content>
          <View style={styles.logoContainer} />
          <View style={styles.formContainer}>{loginForm}</View>
          <View style={styles.loginButtonContainer}>
            <Button onPress={onLogin} style={styles.loginButton}>
              {loading ? <Spinner color="white" /> : <Text>LOGIN</Text>}
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Login;
