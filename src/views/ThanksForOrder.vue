<template>
  <div class="thanks">
    Thanks For Order
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('cart');
export default {
  computed: {
    ...mapGetters(['orders']),
  },
};
</script>

<style scoped>
.thanks {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
}
</style>
