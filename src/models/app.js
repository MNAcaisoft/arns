import Config from '../services/Config';

const app = {
  effects: dispatch => ({
    async init() {
      dispatch.navigation.setRoot(`${Config.urlPrefix}.Login`);
    },
  }),
  reducers: {},
  state: {},
};

export default app;
