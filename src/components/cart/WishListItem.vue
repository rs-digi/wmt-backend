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

      <button class="cart-btn" @click="deleteItem(item.id)">
        Delete</button
      ><button class="cart-btn" @click="moveToCart(item.id, item.quantity)">
        Move To Cart
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
  },
  methods: {
    deleteItem(id) {
      this.$store.dispatch('cart/deleteItem', id);
    },

    moveToCart(id, quantity) {
      this.$store.dispatch('cart/updateItem', {
        id,
        quantity: quantity,
        shopping_cart_type_id: cartType.CART,
      });
    },
  },
};
</script>

<style></style>
