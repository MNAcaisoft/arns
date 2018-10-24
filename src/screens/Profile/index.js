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

class Profile extends React.Component<Props, State> {
  static propTypes = {
    navigator: PropTypes.object,
  };

  goBack = () => {
    const { navigator } = this.props;
    navigator.dismissAllModals({
      animated: true,
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.goBack}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View>
            <Text>Profile</Text>
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

export default Profile;
