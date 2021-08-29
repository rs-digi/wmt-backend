<template>
  <main class="main bg-gray">
    <div class="container">
      <div v-if="isLoadingCartItems" class="loader-container">
        <div class="spinner-border text-primary loader" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <spinner />
      </div>
      <div v-else-if="!isCartEmpty || !isWishListEmpty" class="cart">
        <!-- cart items -->
        <div class="row">
          <div class="col-md-9 mb-4">
            <div class="row">
              <cart-left />
            </div>
            <div class="row mt-4">
              <cart-wish-list />
            </div>
          </div>
          <div class="col-md-3">
            <cart-right />
          </div>
        </div>
      </div>
      <div
        v-else
        class="empty-cart d-flex justify-content-center align-items-center"
      >
        <img src="@/assets/images/empty.svg" width="150" height="150" />
        <h5>Your cart is Empty</h5>
      </div>
    </div>
  </main>
  <section-footer />
</template>

<script>
import CartLeft from '../components/cart/CartLeft.vue';
import CartRight from '../components/cart/CartRight.vue';
import CartWishList from '../components/cart/CartWishList.vue';
import { createNamespacedHelpers } from 'vuex';
import Spinner from '../components/Spinner.vue';
const { mapGetters } = createNamespacedHelpers('cart');
const authMapGetters = createNamespacedHelpers('auth').mapGetters;

export default {
  components: { CartLeft, CartRight, Spinner, CartWishList },
  props: {
    shopping_cart_type_id: {
      default: 1,
    },
  },

  computed: {
    ...mapGetters([
      'totalPrice',
      'isLoadingCartItems',
      'isCartEmpty',
      'isWishListEmpty',
    ]),
    ...authMapGetters(['userInfo', 'isLogin']),
  },
  mounted() {
    if (this.isLogin) {
      this.$store.dispatch('cart/loadCartItems', {
        customerId: this.userInfo.id,
        shopping_cart_type_id: this.shopping_cart_type_id,
      });
    }
  },
};
</script>
<style scoped>
.loader-container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.empty-cart {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
