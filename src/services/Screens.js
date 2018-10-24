import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { Root, StyleProvider } from 'native-base';
import LoginContainer from './../containers/LoginContainer';
import HomeContainer from './../containers/HomeContainer';
import ProfileContainer from './../containers/ProfileContainer';
import SideBarContainer from './../containers/SideBarContainer';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/material';
import Config from './Config';

function themeWrap(WrappedComponent) {
  return class theme extends React.Component {
    static navigatorButtons = WrappedComponent.navigatorButtons;
    static navigatorStyle = { ...WrappedComponent.navigatorStyle, navBarHidden: true };

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <StyleProvider style={getTheme(variables)}>
          <Root style={{ backgroundColor: '#fff' }}>
            <WrappedComponent {...this.props} />
          </Root>
        </StyleProvider>
      );
    }
  };
}

export function registerScreens(store, Provider) {
  Navigation.registerComponent(
    `${Config.urlPrefix}.Login`,
    () => themeWrap(LoginContainer),
    store,
    Provider
  );
  Navigation.registerComponent(
    `${Config.urlPrefix}.Home`,
    () => themeWrap(HomeContainer),
    store,
    Provider
  );
  Navigation.registerComponent(
    `${Config.urlPrefix}.Profile`,
    () => themeWrap(ProfileContainer),
    store,
    Provider
  );
  Navigation.registerComponent(
    `${Config.urlPrefix}.SideBar`,
    () => themeWrap(SideBarContainer),
    store,
    Provider
  );
}
