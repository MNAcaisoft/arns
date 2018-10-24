import * as React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';

import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles, { gradientProperties } from './styles';
import Config from './../../services/Config';

const routes = [
  {
    route: 'Profile',
    caption: 'Profile',
  },
  {
    route: '',
    caption: 'Logout',
  },
];

class SideBar extends React.Component<Props, State> {
  static propTypes = {
    onLogout: PropTypes.func,
    navigator: PropTypes.object,
  };

  goTo(route, caption, logout?) {
    if (logout) {
      this.props.onLogout();
    } else {
      this.props.navigator.push({
        screen: `${Config.urlPrefix}.${route}`,
        title: caption,
      });
    }

    this.toggle();
  }

  toggle() {
    this.props.navigator.toggleDrawer({
      backButtonHidden: true,
      side: 'left',
      animated: true,
    });
  }

  isLogout(caption) {
    return caption === 'Logout';
  }

  render() {
    let visibleScreenInstanceId = '';
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            renderRow={route => (
              <ListItem
                style={[
                  styles.linkWrapper,
                  visibleScreenInstanceId === 'profileStack' ? styles.activeLink : undefined,
                ]}
                onPress={() => {
                  this.goTo(route.route, route.caption, this.isLogout(route.caption));
                }}>
                <Text style={{ color: '#fff' }}>{route.caption}</Text>
              </ListItem>
            )}
          />
          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>{Config.appVersion}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SideBar;
