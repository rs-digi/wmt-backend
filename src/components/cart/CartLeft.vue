<template>
  <div class="bg-white cart-panel">
    <div v-if="cartItems.length != 0">
      <h2>Shopping Cart <span>Price</span></h2>

      <!-- item start -->
      <div v-for="item in cartItems" :key="item.id">
        <cart-item :item="item" />
      </div>

      <!-- item end -->

      <div class="row">
        <div class="col-md-12">
          <p class="sub-total">
            Sub Total ({{ itemCount }}):
            <span class="price">&#8377; {{ totalPrice }}</span>
          </p>
        </div>
      </div>
    </div>
    <h2 class="d-flex justify-content-center align-items-center" v-else>
      Your Cart is Empty
    </h2>
  </div>
</template>

<script>
import CartItem from './CartItem.vue';
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('cart');
export default {
  components: { CartItem },
  computed: {
    ...mapGetters(['cartItems', 'totalPrice', 'itemCount']),
  },
};
</script>

<style scoped></style>
