const navigation = {
  effects: {
    changeRoot(root) {
      this.setRoot(root);
    },
  },
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

export default navigation;
