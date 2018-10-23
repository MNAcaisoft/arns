import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { Component } from 'react';
import { registerScreens } from './services/Screens';
import store from './models';

registerScreens(store, Provider);

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
  }

  onStoreUpdate() {
    const { root } = store.getState().navigation;
    if (root && this.rootScreen !== root) {
      this.rootScreen = root;
      this.switchRoot(root, 'Login');
    }
  }

  switchRoot(root, title) {
    Navigation.startSingleScreenApp({
      screen: {
        screen: root,
        title,
        navigatorStyle: {},
      },
    });
  }
}
