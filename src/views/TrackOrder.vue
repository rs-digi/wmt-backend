<template>
  <div v-if="orders.length != 0">
    <div v-for="order in orders" :key="order._id">
      <p><strong>Status:</strong>{{ order.order_status }}</p>
      <p><strong>Payment Method:</strong>Cash On Delivery</p>
      <h6>Products</h6>
      <div v-for="(item, index) in order.order_item" :key="index" class="mr-3">
        <p>Product Id:{{ item.productid }}</p>
        <p>Product price:{{ item.price }}</p>
        <p>Product quntity:{{ item.quantity }}</p>
      </div>
      <p><strong>Shipping Address</strong></p>
      <p>{{ getShippingAddress }}</p>

      <p><strong>Billing Address</strong></p>
      <p>{{ getBillingAddress }}</p>
    </div>
  </div>
  <div
    v-else
    class="d-flex justify-content-center align-items-center empty-order"
  >
    <h5>No Orders to track</h5>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('cart');
export default {
  computed: {
    ...mapGetters(['orders', 'getShippingAddress', 'getBillingAddress']),
  },
};
</script>
<style scoped>
.empty-order {
  width: 100%;
  height: 100vh;
}
</style>

<style></style>
