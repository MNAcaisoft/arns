import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { Root, StyleProvider } from 'native-base';
import LoginContainer from './../containers/LoginContainer';
import HomeContainer from './../containers/HomeContainer';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/material';

function themeWrap(WrappedComponent) {
  return class theme extends React.Component {
    static navigatorButtons = WrappedComponent.navigatorButtons;
    static navigatorStyle = WrappedComponent.navigatorStyle;

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
  Navigation.registerComponent('arns.Login', () => themeWrap(LoginContainer), store, Provider);
  Navigation.registerComponent('arns.Home', () => themeWrap(HomeContainer), store, Provider);
}
