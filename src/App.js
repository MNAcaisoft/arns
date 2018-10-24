import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { Component } from 'react';
import { registerScreens } from './services/Screens';
import store from './models';
import Config from './services/Config';

registerScreens(store, Provider);

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
  }

  onStoreUpdate() {
    const { root } = store.getState().navigation;
    if (root && this.rootScreen.view !== root.view) {
      this.rootScreen = root;
      this.switchRoot(root.view, root.title, root.sidebar);
    }
  }

  switchRoot(root, title, sidebar) {
    if (sidebar) {
      Navigation.startSingleScreenApp({
        screen: {
          screen: root,
          title,
          navigatorStyle: {},
        },
        drawer: {
          left: {
            screen: `${Config.urlPrefix}.SideBar`,
          },
          disableOpenGesture: true,
        },
      });
    } else {
      Navigation.startSingleScreenApp({
        screen: {
          screen: root,
          title,
          navigatorStyle: {},
        },
      });
    }
  }
}
