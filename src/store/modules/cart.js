import Api from '@/services/api';
import { cartBaseUrl, orderBaseUrl } from '@/services/serviceUrls';
import { cartType } from '@/typesEnum/cartType';
import { isIncude } from '@/utils/index';
import cartService from '../../services/cart-service';
export default {
  namespaced: true,
  state: {
    isLoadingCartItems: false,
    isCartEmpty: false,
    isWishListEmpty: false,
    address: {},
    paymentOptions: { COD: 'Cash On Delivery' },
    cartItems: [],
    wishlistItems: [],
    orders: [],
    orderId: '',
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    },
    wishlistItems(state) {
      return state.wishlistItems;
    },

    totalPrice(state) {
      if (state.cartItems.length) {
        return parseInt(
          state.cartItems?.reduce(
            (total, item) => total + item.product_price * item.quantity,
            0
          )
        ).toFixed(2);
      }
      return 0;
    },

    isLoadingCartItems(state) {
      return state.isLoadingCartItems;
    },
    isCartEmpty(state) {
      return state.isCartEmpty || state.cartItems.length == 0;
    },
    isWishListEmpty(state) {
      return state.isWishListEmpty || state.wishlistItems.length == 0;
    },
    itemCount(state) {
      if (state.cartItems.length) {
        console.log(state.cartItems);
        return state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
      }
      return 0;
    },
    address(state) {
      return state.address;
    },
    paymentOptions(state) {
      return state.paymentOptions;
    },
    orders(state) {
      return state.orders;
    },
    orderId(state) {
      return state.orderId;
    },
    getBillingAddress(state) {
      const shipping = state.address.billing;
      return `${shipping.name}
             ${shipping.address}
              ${shipping.contact}
              ${shipping.email}
               ${shipping.city}
                ${shipping.state}
              ${shipping.country}`;
    },
    getShippingAddress(state) {
      const shipping = state.address.shipping;
      return `${shipping.name}
             ${shipping.address}
              ${shipping.contact}
              ${shipping.email}
               ${shipping.city}
                ${shipping.state}
              ${shipping.country}`;
    },
  },
  mutations: {
    resetAll(state) {
      console.log('resetting cart');
      state.isLoadingCartItems = false;
      state.isCartEmpty = false;
      state.address = {};
      state.paymentOptions = { COD: 'cash On Deliver' };
      state.cartItems = [];
      state.orders = [];
      state.orderId = '';
    },
    isLoadingCartItems(state, value) {
      state.isLoadingCartItems = value;
    },
    isCartEmpty(state, value) {
      state.isCartEmpty = value;
    },
    addItemToCart(state, product) {
      state.cartItems.push(product);
    },
    SET_CART_ITEMS(state, products) {
      state.cartItems = products;
    },
    UPDATE_QUANTITY(state, { id, quantity }) {
      state.cartItems.map((item) => {
        if (item.id == id) {
          item.quantity = quantity;
        }
      });
    },
    DELETE_ITEMS(state, id) {
      state.cartItems = state.cartItems.filter((item) => item.id != id);
    },
    addShippingAddress(state, payload) {
      state.address.shipping = payload;
    },
    addBillingAddress(state, payload) {
      state.address.billing = payload;
    },
    addPaymentOptions(state, paymentOptions) {
      state.paymentOptions = paymentOptions;
    },
    addOrders(state, order) {
      console.log('pushing order');
      state.orders.push(order);
      // if (!isIncude(state.orders, order)) {
      //   state.orders.push(order);
      // } else {
      //   state.orders.map((el) => {
      //     if (el.id == order.id) {
      //       el = { ...order };
      //     }
      //   });
      // }
    },
    addOrderId(state, id) {
      state.orderId = id;
    },
    addWishListItems(state, items) {
      state.wishlistItems = items;
    },
  },
  actions: {
    addItemToCart({ commit }, product) {
      commit('addItemToCart', product);
    },
    async loadCartItems({ commit }, { customerId, shopping_cart_type_id }) {
      try {
        commit('isLoadingCartItems', true);
        commit('isCartEmpty', true);
        let response = await Api(cartBaseUrl).get('/shoppingcart', {
          params: {
            customerid: customerId,
            shopping_cart_type_id,
          },
        });
        let cartItems = response.data.DATA;
        commit('SET_CART_ITEMS', cartItems);
        response = await cartService.getWishLisItems(customerId, 2);
        let wishlistItems = response.data.DATA;
        commit('addWishListItems', wishlistItems);
      } catch (err) {
        console.log(err);
      }
      commit('isLoadingCartItems', false);
      commit('isCartEmpty', false);
    },

    async deleteItem({ commit, dispatch, rootState }, id) {
      try {
        const res = await Api(cartBaseUrl).delete('/shoppingcart/' + id, {
          shopping_cart_type_id: cartType.CART,
        });
        dispatch('loadCartItems', {
          customerId: rootState.auth.userInfo.id,
          shopping_cart_type_id: 1,
        });
        // alert(res.data.MESSAGE);
      } catch (err) {
        console.log(err);
      }
      commit('DELETE_ITEMS', id);
    },
    async saveItem({ commit, rootState }, item) {
      try {
        const res = await Api(cartBaseUrl).post('/shoppingcart/addtocart', {
          product_id: item.product_id,
          customer_id: rootState.auth.userInfo.id,
          quantity: item.quantity,
          shopping_cart_type_id: cartType.WISH_LIST,
        });
        // alert(res.data.MESSAGE);
      } catch (err) {
        console.log(err);
      }

      alert('Saved for Wish List' + item.id);
    },
    async updateItem({ commit, dispatch, rootState }, payload) {
      try {
        const res = await Api(cartBaseUrl).put('/shoppingcart/' + payload.id, {
          quantity: payload.quantity,
          shopping_cart_type_id: payload.shopping_cart_type_id,
        });
        // alert(res.data.MESSAGE);
        dispatch('loadCartItems', {
          customerId: rootState.auth.userInfo.id,
          shopping_cart_type_id: 1,
        });
      } catch (err) {
        console.log(err);
      }
      commit('UPDATE_QUANTITY', payload);
    },
    addShippingAddress({ commit }, payload) {
      commit('addShippingAddress', payload);
    },
    addBillingAddress({ commit }, payload) {
      commit('addBillingAddress', payload);
    },
    addPaymentOptions({ commit }, paymentOptions) {
      commit('addPaymentOptions', paymentOptions);
    },
    async addOrder({ commit, getters, dispatch }, customerId) {
      const address = getters.address.shipping;
      const data = {
        customer_id: customerId,
        address_type: 1,
        first_name: address.name,
        last_name: '',
        address1: address.address,
        address2: '',
        state: address.state,
        country: address.country,
        phone_number: address.contact,
        email: address.email,
      };
      console.log('data add order', data);
      try {
        let res = await Api(orderBaseUrl).post('/order/addorder', data);
        if (res.data.STATUS == 'SUCCESS') {
          const order = res.data.DATA;
          console.log(order);
          // commit('addOrder', order);
          res = await dispatch('updatOrder', {
            customerId,
            orderId: order._id,
          });
          commit('addOrderId', order._id);
          return 'SUCCESS';
        }
      } catch (err) {
        console.log(err);
      }
      return 'FAILURE';
    },
    async updatOrder({ commit, getters }, { customerId, orderId }) {
      const address = getters.address.billing;
      const paymentOptions = getters.paymentOptions;
      const data = {
        customer_id: customerId,
        address_type: 2,
        first_name: address.name,
        last_name: '',
        address1: address.address,
        address2: '',
        state: address.state,
        country: address.country,
        phone_number: address.contact,
        email: address.email,
        payment_method_type: 1,
      };
      console.log('data updateorder', data);
      let res = await Api(orderBaseUrl).put('/order/' + orderId, data);
      if (res.data.STATUS == 'SUCCESS') {
        const order = res.data.DATA;
        console.log(order);
        // commit('addOrder', order);
      }
      return res.data.STATUS;
    },
    addOrders({ commit }, order) {
      commit('addOrders', order);
    },
    addWishListItems({ commit }, items) {
      commit('addWishListItems', items);
    },
  },
};
