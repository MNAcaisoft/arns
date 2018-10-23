import { AsyncStorage } from 'react-native';
import Http, { setAuthHeader, removeAuthHeader } from '../services/Http';
import Config from '../services/Config';

const auth = {
  effects: dispatch => ({
    async storeToken(token) {
      this.setToken(token);
      try {
        await AsyncStorage.setItem(`@${Config.urlPrefix}:token`, token);
      } catch (error) {
        console.log('Something go wrong!');
      }
    },
    async getToken() {
      try {
        const token = await AsyncStorage.getItem(`@${Config.urlPrefix}:token`);
        if (token !== null) {
          this.setToken(token);
        }
        return token;
      } catch (error) {
        console.log('Something go wrong!');
      }
    },
    async login(data) {
      try {
        const response = await Http.post('/auth/login/', data);
        this.storeToken(response.data.token);
        setAuthHeader(response.data.token);
        this.setUser(response.data.user);
        const token = await AsyncStorage.getItem(`@${Config.urlPrefix}:token`);
        console.log('tokenisko', token);
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
