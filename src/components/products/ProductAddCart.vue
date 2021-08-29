<template>
  <div class="share">
    Share
    <a href=""><i class="fa fa-envelope-o mail"></i></a>
    <a href=""><i class="fa fa-facebook facebook"></i></a>
    <a href=""><i class="fa fa-twitter twitter"></i></a>
    <a href=""><i class="fa fa-pinterest pinterest"></i></a>
  </div>
  <div class="add-to-cart-section">
    <div class="productNumber">
      <button @click.prevent="minusHandler">-</button>
        Quantity: {{quantity}}
      <button @click.prevent="plusHandler">+</button>
    </div>
    <button class="addtocart" @click="addToCart(1)">
      {{ cartAdded ? 'Added' : 'Add' }} to Cart
    </button>
    <button class="buynow" @click="buyNow">Buy Now</button>
    <div class="secure">
      <i class="fa fa-lock"></i> <a href="">Secure transaction</a>
    </div>
    <div class="location-1">
      <i class="fa fa-map-marker"></i> <a href="">Select delivery location</a>
    </div>
    <button class="addtowishlist" @click="addToCart(2)">
      {{ wishListAdded ? 'Added' : 'Add' }} to Wish List
    </button>
    <spinner v-if="loading" />

  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import CartService from '../../services/cart-service';
import Spinner from '../Spinner.vue';
const { mapGetters } = createNamespacedHelpers('auth');
export default {
  components: { Spinner },
  props: ['product'],
  data() {
    return {
      quantity: 1,
      cartAdded: false,
      wishListAdded: false,
      loading: false,
    };
  },
  computed: { ...mapGetters(['userInfo', 'isLogin']) },
  methods: {
    addToCart(cartType) {
      if (this.cartAdded) {
        alert('Product Already Added To the cart');
        return;
      }
      if (this.wishListAdded) {
        alert('Product Already Added To the WishList');
        return;
      }
      const data = {
        product_id: this.product._id,
        customer_id: this.userInfo.id,
        quantity: this.quantity,
        shopping_cart_type_id: cartType,
      };
      if (this.isLogin) {
        this.loading = true;

        CartService.addCart(data)
          .then((response) => {
            const status = response.data.STATUS;
            if (status == 'SUCCESS') {
              if (cartType == 1) {
                this.cartAdded = true;
                this.wishListAdded = false;
              } else {
                this.cartAdded = false;
                this.wishListAdded = true;
              }
            }
            alert(response.data.MESSAGE);

            this.loading = false;
          })
          .catch((error) => {
            debugger;
            console.log(error);
            alert(error);
            this.loading = false;
          });
      } else {
        this.$store.dispatch('cart/addItemToCart');
        alert('Product added to cart');
      }
    },

    buyNow() {
      alert('working on');
    },
    plusHandler(){
      this.quantity += 1;
    },
    minusHandler(){
      if(this.quantity == 0){
        return
      }else{
        this.quantity -= 1;
      }
    }
  },
};
</script>
