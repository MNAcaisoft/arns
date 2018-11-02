import * as React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';

import { View } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
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
    onGoToScreen: PropTypes.func,
    onToggleDrawer: PropTypes.func,
    navigator: PropTypes.object,
  };

  async goTo(route, caption, logout?) {
    const { onLogout, onGoToScreen } = this.props;
    if (logout) {
      await onLogout();
    } else {
      onGoToScreen({
        screen: `${Config.urlPrefix}.${route}`,
        title: caption,
      });
    }

    this.toggle();
  }

  toggle() {
    const { onToggleDrawer, navigator } = this.props;
    console.log(navigator);
    navigator.toggleDrawer({
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
        <LinearGradient {...gradientProperties} style={styles.container}>
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
        </LinearGradient>
      </Container>
    );
  }
}

export default SideBar;
