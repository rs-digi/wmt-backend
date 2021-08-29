<template>
  <div class="row">
    <div class="col-md-2">
      <img src="@/assets/images/product_1.jpg" class="product-img" />
    </div>
    <div class="col-md-8">
      <p class="product-name">
        {{ item.product_name }}
      </p>
      <p class="in-stock">{{ item.stock_status }}</p>
      <p class="sold-by">
        Sold By <a href="">{{ item.sold_by }}</a>
      </p>
      <p class="gift">Gift options not available. <a href="">Learn more</a></p>
      <select
        class="quantity"
        @change="updateItem(item.id, cartType.CART)"
        v-model="quantity"
      >
        <option
          v-for="qt in Math.ceil(item.quantity / 10) * 10"
          :key="qt"
          :value="qt"
          :selected="qt == item.quantity"
        >
          Qty:{{ qt }}
        </option>
      </select>
      <button class="cart-btn" @click="deleteItem(item.id)">
        Delete</button
      ><button
        class="cart-btn"
        @click="updateItem(item.id, cartType.WISH_LIST)"
      >
        Save For Later
      </button>
      <router-link to="/"
        ><button class="cart-btn">See More Like This</button></router-link
      >
    </div>
    <div class="col-md-2">
      <p class="price">&#8377; {{ item.product_price }}</p>
    </div>
    <div class="col-md-12"><hr /></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { cartType } from '@/typesEnum/cartType.js';
const { mapGetters } = createNamespacedHelpers('auth');
export default {
  props: ['item'],
  data(props) {
    return {
      quantity: props.item.quantity,
      cartType,
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
    price() {
      return this.item.product_price * this.item.quantity;
    },
  },
  methods: {
    deleteItem(id) {
      this.$store.dispatch('cart/deleteItem', id);
    },
    saveItem(item) {
      let payload = { ...item };
      payload['customer_id'] = this.userInfo.id;
      console.log('payload', payload);
      this.$store.dispatch('cart/saveItem', payload);
    },
    updateItem(id, cartType) {
      console.log(cartType);
      this.$store.dispatch('cart/updateItem', {
        id,
        quantity: this.quantity,
        shopping_cart_type_id: cartType,
      });
    },
  },
};
</script>

<style></style>
