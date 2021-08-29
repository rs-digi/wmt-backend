<template>
  <main class="main">
    <div class="container">
      <div class="cart">
        <div class="row">
          <div class="col-md-9 mb-4">
            <form @submit.prevent="addAddress">
              <div class="bg-white cart-panel">
                <div class="checkout-heading">Shipping Address</div>
                <div class="checkout-address">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="shipping-billing">
                        <input
                          type="text"
                          name="Name"
                          v-model="shipping.name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="shipping-billing">
                        <input
                          type="tel"
                          name="phone"
                          v-model="shipping.contact"
                          placeholder="Contact No"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="shipping-billing">
                        <input
                          type="email"
                          name="email"
                          v-model="shipping.email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="shipping-billing">
                        <input
                          type="text"
                          name="address"
                          v-model="shipping.address"
                          placeholder="Address"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="shipping-billing">
                        <input
                          type="text"
                          name="city"
                          v-model="shipping.city"
                          placeholder="City"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="shipping-billing">
                        <input
                          type="text"
                          name="state"
                          v-model="shipping.state"
                          placeholder="State"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="shipping-billing">
                        <input
                          type="text"
                          name="pincode"
                          v-model="shipping.pincode"
                          placeholder="Pincode"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="shipping-billing">
                        <input
                          type="text"
                          name="country"
                          v-model="shipping.country"
                          placeholder="Country"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row shipping-billing-same">
                  <div class="col-md-12">
                    <input
                      type="checkbox"
                      name=""
                      class="sameshipping"
                      v-model="isChecked"
                      @change="sameAddress"
                    />
                    Shipping and Billing Address Same
                  </div>
                </div>

                <div v-if="!isChecked" class="billing">
                  <div class="checkout-heading">Billing Address</div>
                  <div class="checkout-address">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="shipping-billing">
                          <input
                            type="text"
                            name=""
                            v-model="billing.name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="shipping-billing">
                          <input
                            type="text"
                            name=""
                            v-model="billing.contact"
                            placeholder="Contact No"
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="shipping-billing">
                          <input
                            type="email"
                            name=""
                            v-model="billing.email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="shipping-billing">
                          <input
                            type="text"
                            name=""
                            v-model="billing.address"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="shipping-billing">
                          <input
                            type="text"
                            name=""
                            v-model="billing.city"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="shipping-billing">
                          <input
                            type="text"
                            name=""
                            v-model="billing.state"
                            placeholder="State"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="shipping-billing">
                          <input
                            type="text"
                            name=""
                            v-model="billing.pincode"
                            placeholder="Pincode"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="shipping-billing">
                          <input
                            type="text"
                            name=""
                            v-model="billing.country"
                            placeholder="Country"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="checkout-heading">Payment Method</div>
                <div class="checkout-address">
                  <div class="row">
                    <div class="col-md-9">
                      <div class="shipping-billint-radio">
                        <input type="radio" name="" checked /> Cash on Delivery
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="shipping-billing">
                        <!-- <router-link to="/cart/checkout"> -->
                        <button type="submit" name="">Continue</button>
                        <!-- </router-link> -->
                      </div>
                      <div
                        v-if="isLoadingOrder"
                        class="d-flex justify-content-center align-items-center"
                      >
                        <div
                          class="spinner-border text-primary loader"
                          role="status"
                        >
                          <span class="sr-only">Loading...</span>
                        </div>
                        <spinner />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <order-summary :totalPrice="totalPrice" />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import OrderSummary from '../components/cart/OrderSummary.vue';
import { createNamespacedHelpers } from 'vuex';
import Spinner from '../components/Spinner.vue';
const userMapGetters = createNamespacedHelpers('auth').mapGetters;
const { mapGetters } = createNamespacedHelpers('cart');
export default {
  data() {
    return {
      isChecked: true,
      isLoadingOrder: false,
      shipping: {
        name: '',
        contact: '',
        email: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
      },
      billing: {
        name: '',
        contact: '',
        email: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
      },
    };
  },
  components: { OrderSummary, Spinner },
  mounted() {
    if (this.address) {
      this.shipping = { ...this.address.shipping };
      this.billing = { ...this.address.billing };
    }
  },
  computed: {
    ...mapGetters(['address', 'totalPrice']),
    ...userMapGetters(['userInfo']),
  },
  methods: {
    sameAddress() {
      if (this.isChecked) {
        this.billing = { ...this.shipping };
      }
    },
    validation() {
      if (
        !this.shipping.contact ||
        !this.shipping.email ||
        !this.shipping.name ||
        !this.shipping.address ||
        !this.shipping.city ||
        !this.shipping.state ||
        !this.shipping.pincode ||
        !this.shipping.country ||
        this.shipping.contact == '' ||
        this.shipping.email == '' ||
        this.shipping.name == '' ||
        this.shipping.address == '' ||
        this.shipping.city == '' ||
        this.shipping.state == '' ||
        this.shipping.pincode == '' ||
        this.shipping.country == ''
      ) {
        alert('Please Fill All Input Fields');
        return false;
      }
      if (!this.isChecked) {
        if (
          !this.billing.contact ||
          !this.billing.email ||
          !this.billing.address ||
          !this.billing.name ||
          !this.billing.city ||
          !this.billing.state ||
          !this.billing.pincode ||
          !this.billing.country ||
          this.billing.contact == '' ||
          this.billing.email == '' ||
          this.billing.address == '' ||
          this.billing.name == '' ||
          this.billing.city == '' ||
          this.billing.state == '' ||
          this.billing.pincode == '' ||
          this.billing.country == ''
        ) {
          alert('Please Fill All Input Fields');
          return false;
        }
      }
      return true;
    },
    addAddress() {
      this.sameAddress();
      if (!this.validation()) {
        return;
      }

      console.log('this.shipping', this.shipping);
      console.log('this.billing', this.billing);
      this.isLoadingOrder = true;
      this.$store.dispatch('cart/addShippingAddress', this.shipping);
      this.$store.dispatch('cart/addBillingAddress', this.billing);
      this.proceedToPay();
    },
    async proceedToPay() {
      let res = await this.$store.dispatch('cart/addOrder', this.userInfo.id);
      if (res == 'SUCCESS') {
        this.$router.push('/cart/checkout');
      } else {
        alert(res);
      }
      this.isLoadingOrder = false;
    },
  },
};
</script>
<style scoped></style>
