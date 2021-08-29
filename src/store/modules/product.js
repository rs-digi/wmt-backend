export default {
  namespaced: true,
  state: {
    products: [],
    categories: [
      'All Products',
      'cipla',
      'Dabur',
      'Hansaplast',
      'Mankind',
      'TrueBasics',
      'Accu-check',
      'Abott',
      'Zydus',
    ],
    searchCategory: 'All Products',
    searchKey: '',
  },
  mutations: {
    addProducts(state, products) {
      state.products = products;
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    searchCategory(state, category) {
      state.searchCategory = category;
    },
    searchKey(state, key) {
      state.searchKey = key;
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    categories(state) {
      return state.categories;
    },
    productSearchCategory(state) {
      return state.searchCategory;
    },
    productSearchKey(state) {
      return state.searchKey;
    },
  },
  actions: {
    // loadProducts() {},
    // loadProductById() {},

    productSearchCategory({ commit }, category) {
      commit('searchCategory', category);
    },
    productSearchKey({ commit }, key) {
      commit('searchKey', key);
    },
  },
};
