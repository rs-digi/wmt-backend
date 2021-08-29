<template>
  <main class="main mb-10 pb-1">
    <!-- Start of Breadcrumb -->
    <breadcrumb-nav />
    <!-- End of Breadcrumb -->

    <!-- Start of Page Content -->
    <div class="page-content">
      <div class="container">
        <div v-if="loading" class="loader-container">
          <spinner />
        </div>
        <div v-else class="">
          <div class="bg-white p-10">
            <div class="product product-single row">
              <div class="col-md-4 mb-6">
                <product-image-zoom :product="product" />
              </div>
              <div class="col-md-5 mb-4 mb-md-6">
                <product-description :product="product" />
              </div>
              <div class="col-md-3 mb-4 mb-md-6">
                <!-- <div class="subscribe">
                  <h4>Subscribe & Save</h4>
                </div> -->
                <product-add-cart :product="product" />
              </div>
            </div>
            <product-details :product="product" />

            <related-products />
          </div>
          <!-- End of Main Content -->
        </div>
      </div>
    </div>
    <!-- End of Page Content -->
  </main>
</template>
<script>
import BreadcrumbNav from '../components/BreadcrumbNav.vue';
import ProductDescription from '../components/products/ProductDescription.vue';
import ProductDetails from '../components/products/ProductDetails.vue';
import ProductAddCart from '../components/products/ProductAddCart.vue';
import ProductImageZoom from '../components/products/ProductImageZoom.vue';
import RelatedProducts from '../components/products/RelatedProducts.vue';
import UserService from '../services/user.service';
import Spinner from '../components/Spinner.vue';
export default {
  components: {
    BreadcrumbNav,
    ProductDetails,
    RelatedProducts,
    ProductDescription,
    ProductImageZoom,
    ProductAddCart,
    Spinner,
  },
  // props: ['productrs'],
  data() {
    return {
      loading: true,
      product: {},
    };
  },
  methods: {
    loadProductDetails() {},
  },
  mounted() {
    UserService.getProductById(this.$route.params.id).then(
      (response) => {
        console.log(response);
        this.product = response.data.DATA;
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
        console.log(error);
      }
    );
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
</style>
