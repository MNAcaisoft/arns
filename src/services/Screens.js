import { Navigation } from 'react-native-navigation';
import LoginContainer from './../containers/LoginContainer';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('arns.Login', () => LoginContainer, store, Provider);
}
