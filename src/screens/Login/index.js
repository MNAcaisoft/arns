import * as React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Button, Text, Spinner } from 'native-base';

// import styles from './styles';

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
          {loginForm}
          <Button onPress={onLogin}>
            {loading ? <Spinner color="red" /> : <Text>LOGIN</Text>}
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
