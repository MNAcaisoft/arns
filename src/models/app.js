import Config from '../services/Config';
import SplashScreen from 'react-native-splash-screen';

const app = {
  effects: dispatch => ({
    async init() {
      const token = dispatch.auth.getToken(`${Config.urlPrefix}:token`);
      if (token) {
        dispatch.navigation.setRoot(`${Config.urlPrefix}.Home`);
      } else {
        dispatch.navigation.setRoot(`${Config.urlPrefix}.Login`);
      }
      SplashScreen.hide();
    },
  }),
  reducers: {},
  state: {},
};

export default app;
