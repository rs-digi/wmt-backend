<template>
  <div v-if="wishlistItems.length" class="bg-white cart-panel">
    <h2>WishList <span>Price</span></h2>

    <!-- item start -->
    <div v-for="item in wishlistItems" :key="item.id">
      <wish-list-item :item="item" />
    </div>
    <!-- item end -->
  </div>
</template>

<script>
import { createNamespacedHelpers, mapState } from 'vuex';
import WishListItem from './WishListItem.vue';
const { mapGetters } = createNamespacedHelpers('cart');
export default {
  components: { WishListItem },
  computed: {
    ...mapGetters(['wishlistItems']),
  },
};
</script>

<style scoped></style>
