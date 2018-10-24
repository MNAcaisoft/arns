import * as React from 'react';
import { Text, View } from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base';
import PropTypes from 'prop-types';

// import styles from './styles';

class Home extends React.Component<Props, State> {
  static propTypes = {
    navigator: PropTypes.object,
  };

  toggleMenu = () => {
    const { navigator } = this.props;
    navigator.toggleDrawer({
      backButtonHidden: true,
      side: 'left',
      animated: true,
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.toggleMenu}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View>
            <Text>Home</Text>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text style={{ color: '#fff' }}>Acaisoft RNS</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;
