import { createApp } from 'vue';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import './styles/style.css';
import router from './router';
import { createStore } from 'vuex';
// import { auth } from './vuex/auth.module';
import createPersistedState from 'vuex-persistedstate';
import cart from './store/modules/cart';
import auth from './store/modules/auth';
import product from './store/modules/product';

// Create a new store instance.
const store = createStore({
  // modules: {
  //   auth,
  // },
  // state () {
  //   return {
  //     isLogin: false
  //   }
  // },
  // mutations: {
  //   isLogin (state) {
  //     state.isLogin = !state.isLogin
  //   }
  // },
  // actions: {
  //   isLogin (context) {
  //     context.commit('isLogin');
  //   }
  // },
  // getters: {
  //   isLogin (state) {
  //     return state.isLogin
  //   }
  // }
  plugins: [createPersistedState()],
  modules: {
    auth,
    cart,
    product,
  },
  actions: {
    resetAll({ commit }) {
      commit('auth/resetAll');
      commit('cart/resetAll');
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.mount('#app');
