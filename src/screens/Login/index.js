import * as React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Button, Text } from 'native-base';

// import styles from './styles';

class Login extends React.Component<Props, State> {
  static propTypes = {
    onLogin: PropTypes.func,
  };

  render() {
    const { onLogin } = this.props;
    return (
      <Container>
        <Content>
          <Button onPress={onLogin}>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
