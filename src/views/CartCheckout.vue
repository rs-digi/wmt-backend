<template>
  <main class="main">
    <div class="container">
      <div class="cart">
        <div class="row">
          <!-- cart left -->
          <div class="col-md-9 mb-4">
            <div class="bg-white cart-panel">
              <div class="checkout-heading">
                Checkout (<span>{{ itemCount }} Items</span>)
                <p>
                  By placing your order, you agree to worldmediacltrade.com’s
                  <a href="">privacy policy</a> and
                  <a href="">conditions of use</a>
                </p>
              </div>
              <div class="checkout-address">
                <div class="row">
                  <div class="col-md-3">
                    <div class="address">
                      <h2>
                        Shipping Address
                        <span
                          ><router-link to="/cart/address">
                            <a href="">Change</a>
                          </router-link></span
                        >
                      </h2>
                      <p>{{ address.shipping.name }}</p>
                      <p>
                        {{ address.shipping.address }}
                      </p>
                      <p>
                        <b>Contact Number</b><br />
                        {{ address.shipping.contact }}
                      </p>
                      <p>
                        <b>Email Address</b><br />
                        {{ address.shipping.email }}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="address">
                      <h2>
                        Payment Method
                        <span
                          ><router-link to="/cart/address">
                            <a href="">Change</a>
                          </router-link></span
                        >
                      </h2>
                      <p>{{ paymentOptions.COD }}</p>

                      <h2 class="mt-4">
                        Billing Address
                        <span
                          ><router-link to="/cart/address">
                            <a href="">Change</a>
                          </router-link></span
                        >
                      </h2>
                      <p>{{ address.billing.name }}</p>
                      <p>
                        {{ address.billing.address }}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="gift-card">
                      <h2>Gift card & promotional codes :</h2>
                      <form @submit.prevent>
                        <input type="text" name="" placeholder="Enter Code" />
                        <button type="submit" name="">Apply</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="checkout-item">
                <div class="row">
                  <div class="col-md-8">
                    <!-- item start -->
                    <div class="row" v-for="item in cartItems" :key="item.id">
                      <div class="col-md-2">
                        <img
                          src="@/assets/images/product_1.jpg"
                          class="product-img"
                        />
                      </div>
                      <div class="col-md-8">
                        <p class="product-name">
                          {{ item.product_name }}
                        </p>
                        <p class="qty">Qty: {{ item.quantity }}</p>
                      </div>
                      <div class="col-md-2">
                        <p class="price">&#8377; {{ item.item_price }}</p>
                      </div>
                    </div>
                    <!-- item end -->
                  </div>
                  <div class="col-md-4">
                    <div class="delivery-option">
                      <h2>Choose Delivery Option:</h2>
                      <div class="shipping">
                        <input type="radio" name="delivery" checked /> Free
                        Shipping - <span>15 Aug 2021</span>
                      </div>
                      <div class="shipping">
                        <input type="radio" name="delivery" /> Standard Shipping
                        - <span>15 Aug 2021</span>
                      </div>
                      <div class="shipping">
                        <input type="radio" name="delivery" /> Tow Day Shipping
                        - <span>15 Aug 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <order-summary
            :showBtn="true"
            :totalPrice="totalPrice"
            @proceedToPay="proceedToPay"
          />
        </div>
      </div>
    </div>
  </main>
  <!-- End of Main -->
</template>

<script>
import OrderSummary from '../components/cart/OrderSummary.vue';
import OrderService from '../services/order-service';
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('cart');
export default {
  components: { OrderSummary },
  computed: {
    ...mapGetters([
      'address',
      'paymentOptions',
      'cartItems',
      'totalPrice',
      'itemCount',
      'orderId',
    ]),
  },
  methods: {
    async proceedToPay() {
      try {
        const res = await OrderService.checkoutOrder(this.orderId);
        const order = res.data.DATA;
        this.$store.dispatch('cart/addOrders', order);
        console.log(res);
        this.$router.push('/thanksfororder');
      } catch (err) {
        console.log(err);
      }
      // } else {
      //   alert(res);
      // }
    },
  },
};
</script>

<style></style>
