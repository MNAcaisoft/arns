const app = {
  effects: dispatch => ({
    async init() {
      dispatch.app.setRoot('arns.Login');
    },
    changeRoot(root) {
      this.setRoot(root);
    },
  }),
  reducers: {
    setRoot(state, payload) {
      return {
        ...state,
        root: payload,
      };
    },
  },
  state: {
    root: null,
  },
};

export default app;
