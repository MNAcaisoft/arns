import React from 'react';
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
import Home from './../../screens/Home';

class HomeContainer extends React.Component<Props, State> {
  // constructor(props, state) {
  //   super(props, state);
  //   console.log(this);
  // }

  render() {
    const { props } = this;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Home {...props} />
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(HomeContainer);
