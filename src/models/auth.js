import Http, { setAuthHeader, removeAuthHeader } from '../services/Http';
import Config from '../services/Config';

const auth = {
  effects: dispatch => ({
    async login(data) {
      try {
        const response = await Http.post('/auth/login/', data);
        this.setToken(response.data.token);
        this.setUser(response.data.user);
        dispatch.navigation.setRoot(`${Config.urlPrefix}.Home`);
        return response;
      } catch (err) {
        throw err.response;
      }
    },
  }),
  reducers: {
    setToken(state, payload) {
      return {
        ...state,
        token: payload,
      };
    },
    setUser(state, payload) {
      return {
        ...state,
        user: payload,
      };
    },
  },
  state: {
    token: null,
    user: null,
  },
};

export default auth;
