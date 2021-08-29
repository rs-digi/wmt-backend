import Api from '@/services/api';
import { authBaseUrl } from '@/services/serviceUrls';
import axios from 'axios';
import authService from '../../services/auth.service';

export default {
  namespaced: true,
  state() {
    return {
      isLogin: false,
      userInfo: {},
    };
  },
  mutations: {
    resetAll(state) {
      console.log('resetting auth');
      state.isLogin = false;
      state.userInfo = {};
    },
    isLogin(state, value = false) {
      state.isLogin = value;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    isLogin({ commit }, value) {
      commit('isLogin', value);
    },

    register({ commit }, user) {
      return authService.register(user).then(
        (response) => {
          // commit('registerSuccess');/
          return Promise.resolve(response.data);
        },
        (error) => {
          // commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },

    async userLogin({ commit, dispatch }, { username, password }) {
      try {
        var data = JSON.stringify({ username, password });

        var config = {
          method: 'post',
          url: 'https://damp-reaches-10818.herokuapp.com/api/auth/signin',
          headers: {
            'Content-Type': 'application/json',
          },
          data: data,
        };

        let res = await axios(config);

        if (res.message) {
          console.log(res.message);
          return res.message;
        }
        commit('setUserInfo', res.data);
        dispatch('isLogin', true);
        return 'success';
      } catch (err) {
        return 'There is some error in server';
      }
    },

    async userRegister(
      { commit, dispatch },
      {
        username,
        email,
        password,
        first_name,
        last_name,
        country,
        company_name,
        role,
      }
    ) {
      try {
        var data = JSON.stringify({
          username,
          email,
          password,
          first_name,
          last_name,
          country,
          company_name,
          role,
        });

        var config = {
          method: 'post',
          url: 'https://damp-reaches-10818.herokuapp.com/api/auth/signup',
          headers: {
            'Content-Type': 'application/json',
          },
          data: data,
        };

        let res = await axios(config);

        if (res.message) {
          console.log(res.message);
          return res.message;
        }
        return 'success';
      } catch (err) {
        return 'There is some error in server';
      }
    },
  },
  getters: {
    isLogin(state) {
      return state.isLogin;
    },
    userInfo(state) {
      return state.userInfo;
    },
  },
};
