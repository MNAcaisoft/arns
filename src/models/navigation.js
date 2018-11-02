const navigation = {
  effects: {
    changeAppRoot(root) {
      this.setRoot(root);
    },
    initNav(nav) {
      this.setNavigation(nav);
    },
    goToScreen(data, state) {
      state.navigation.nav.showModal(data);
    },
    changeStackRoot(view, state){
      state.navigation.popToRoot();
      this.setNavigation(state.navigation);
    },
    resetToStackRoot({}, state) {
      state.navigation.popToRoot();
      this.setNavigation(state.navigation);
    },
  },
  reducers: {
    setNavigation(state, payload) {
      return {
        ...state,
        nav: payload,
      };
    },
    setRoot(state, payload) {
      return {
        ...state,
        root: payload,
      };
    },
  },
  state: {
    root: null,
    nav: null,
  },
};

export default navigation;
