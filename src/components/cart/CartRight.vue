<template>
  <div class="row">
    <div v-if="!isCartEmpty">
      <div class="col-md-12 col-xs-6 mb-4">
        <div class="bg-white cart-panel-right-protection">
          100% Purchase Protection
          <span>Original Products | Secure Payment</span>
        </div>
      </div>
      <div class="col-md-12 col-xs-6 mb-4">
        <div class="bg-white cart-panel-right-detail">
          <p class="detail">
            <img src="@/assets/images/check.png" />Part of your order qualifies
            for FREE Delivery. Select this option at checkout.
            <span>Details</span>
          </p>
          <p class="sub-total">
            Sub Total ( {{ itemCount }} Items ) :
            <span class="price">&#8377; {{ totalPrice }}</span>
          </p>
          <input type="checkbox" name="" /> This order contains a gift
          <router-link to="/cart/address">
            <button type="submit" name="">Proceed To Buy</button>
          </router-link>
          <select name="">
            <option value="" selected>EMI Available</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-xs-6 mb-4">
      <div class="bg-white cart-panel-right-sponsored">
        <h2>Sponsored Products related to items in your cart</h2>
        <!-- item -->
        <div v-for="product in products" :key="product.name">
          <sponsored-products :product="product" />
        </div>
        <!-- item end -->
      </div>
    </div>
  </div>
</template>

<script>
import SponsoredProducts from '../sponsoredproducts/SponsoredProducts.vue';
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('cart');
export default {
  components: { SponsoredProducts },
  data() {
    return {
      products: [
        {
          name: 'Fast&Up 100%…',
          price: 1999.0,
        },
        {
          name: 'Horlicks Health &…',
          price: 412.0,
        },
        {
          name: 'MuscleBlaze Biozyme…',
          price: 4499.0,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['totalPrice', 'itemCount', 'isCartEmpty']),
  },
};
</script>
<style scoped></style>
