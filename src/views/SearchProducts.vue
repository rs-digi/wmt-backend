<template>
  <main class="main">
    <div class="container">
      <section class="home">
        <div class="home-row">
          <div v-if="loading" class="windows8">
            <div class="wBall" id="wBall_1">
              <div class="wInnerBall"></div>
            </div>
            <div class="wBall" id="wBall_2">
              <div class="wInnerBall"></div>
            </div>
            <div class="wBall" id="wBall_3">
              <div class="wInnerBall"></div>
            </div>
            <div class="wBall" id="wBall_4">
              <div class="wInnerBall"></div>
            </div>
            <div class="wBall" id="wBall_5">
              <div class="wInnerBall"></div>
            </div>
          </div>
          <h2 class="home-row-title" v-if="!loading">{{ products.MESSAGE }}</h2>
          <div class="home-product-listing" v-if="!loading">
            <div
              class="hproduct"
              v-for="product in products.DATA"
              :key="product.id"
            >
              <ProductCard :productrs="product" />
            </div>
            <a :href="products.MESSAGE">View More</a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import ProductCard from '../components/products/ProductCard.vue';
import UserService from '../services/user.service.js';
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('product');
export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: '',
      loading: true
    };
  },
  computed: {
    ...mapGetters(['productSearchKey']),
  },
  mounted() {
    console.log(this.productSearchKey)
     this.searchProducts(this.productSearchKey);
  },
  watch: {
    productSearchKey: function(val) {
     this.searchProducts(this.productSearchKey);
    },
  },
  methods: {
    searchProducts(key) {
      console.log(key);
      this.loading = true;
      UserService.searchProducts(key).then(
        (response) => {
          this.products = response.data;
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
