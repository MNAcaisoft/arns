import Config from '../services/Config';

const app = {
  effects: dispatch => ({
    async init() {
      const token = dispatch.auth.getToken(`${Config.urlPrefix}:token`);
      if (token) {
        dispatch.navigation.setRoot(`${Config.urlPrefix}.Home`);
      } else {
        dispatch.navigation.setRoot(`${Config.urlPrefix}.Login`);
      }
    },
  }),
  reducers: {},
  state: {},
};

export default app;
