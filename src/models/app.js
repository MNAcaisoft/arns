import SplashScreen from 'react-native-splash-screen';
import Config from '../services/Config';

const app = {
  effects: dispatch => ({
    async init() {
      const token = await dispatch.auth.getToken(`${Config.urlPrefix}:token`);
      if (token) {
        dispatch.navigation.changeAppRoot({
          view: `${Config.urlPrefix}.Home`,
          title: 'Home',
          sidebar: true,
        });
      } else {
        dispatch.navigation.changeAppRoot({
          view: `${Config.urlPrefix}.Login`,
          title: 'Login',
          sidebar: false,
        });
      }
      SplashScreen.hide();
    },
  }),
  reducers: {},
  state: {},
};

export default app;
