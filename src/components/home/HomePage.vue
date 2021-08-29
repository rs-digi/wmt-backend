<template>
  <main class="main">
    <div class="container">
      <section class="home">
        <div class="home-row">
          <h2>To begin adding products</h2>
          <h1>Find your products in World Medical Trade catalog</h1>
          <form>
            <input type="text" v-model="findproduct" placeholder="Product Name, UPC, EAN, ISBIN, or ASIN"/><button class="productsearch" @click.prevent="findProduct"><i class="fa fa-search" aria-hidden="true"></i></button>
          </form>
          <div class="productlink">
            <a @click.prevent="newProduct">I'm adding a product not sold on WMT</a>
            <a @click.prevent="updateProduct">I'm uploading a file to add multiple products</a>
          </div>
        </div>
        <div class="bannerBg">
          <img src="images/selectproductbg.png" alt="" />
        </div>
         <h2 class="home-row-title" v-if="!loading">{{ products.MESSAGE }}</h2>
          <div class="home-product-listing" v-if="!loading">
            <div
              class="hproduct"
              v-for="product in products.DATA"
              :key="product._id"
            >
              <ProductCard :productrs="product" />
            </div>
            <!-- <a :href="products.MESSAGE">View More</a> -->
          </div>
        <div></div>
      </section>
       
    </div>
  </main>
</template>

<script>
import ProductCard from '../products/ProductCard.vue';
import UserService from '../../services/user.service.js';
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('product');
export default {
   components: {
    ProductCard,
  },
  data() {
    return {
      products: '',
      loading: true,
    };
  },
  computed: {
    ...mapGetters(['productSearchKey']),
  },
  mounted() {

  },
  watch: {
 
  },
  methods: {
    newProduct() {
      this.$router.push('/addcategory');
    },
    findProduct(){
      console.log('product search', this.findproduct);
       this.loading = true;
      UserService.searchProducts(this.findproduct).then(
        (response) => {
         if(response.data.DATA.length > 0){
            this.products = response.data;
             this.loading = false;
          }
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
    }
  },
};
</script>
<style scoped>
.bannerBg {
       position: absolute;
  right: 3vw;
    bottom: 3vw;
}
section.home {
        position: relative;
    min-height: 451px;
    background: #F7FEFF;
   padding: 8vw;
}
.home-row {
    background: transparent;
    padding: 0;
    border-radius: 0;
    margin: 20px 0;
    width: 60%;
}
.home-row input{
 width: 92%;
    padding: 10px 20px;
    border: 1px solid #EAEDED;
    height: 56px;
}
button.productsearch {
    background: #EAEDED;
    height: 56px;
    width: 8%;
    border: 1px solid #C8CACA;
    color: #000;
    color: #C8CACA;
    font-size: 24px;
    line-height: 10px;
    box-sizing: border-box;
    position: relative;
    top: 4px;
    cursor: pointer;
}
.productlink {
    margin: 60px 0;
}
.productlink a{
  color: #333;
  text-decoration: underline;
  margin: 0 30px;
  cursor:pointer;
}
</style>