<template>
  <div class="col-md-3">
    <div class="row">
      <div class="col-md-12 col-xs-6 mb-4">
        <div class="bg-white placeorder-panel-right-detail">
          <button
            v-show="showBtn"
            type="submit"
            name=""
            class="mb-4"
            @click="palceYourOrder"
          >
            Place Your Order
          </button>
          <h4>Order Summary</h4>
          <p>
            Items: <span class="price">&#8377; {{ totalPrice }}</span>
          </p>
          <p>Shipping & Handling: <span class="price">&#8377; 0.00</span></p>
          <hr />
          <p>Total Before Tax: <span class="price">&#8377; 0.00</span></p>
          <p>
            Estimated Tax to be Collected:
            <span class="price">&#8377; 0.00</span>
          </p>
          <h3>
            Order Total: <span class="price">&#8377; {{ totalPrice }}</span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showBtn: {
      default: false,
    },
    totalPrice: {
      default: 0.0,
    },
  },
  methods: {
    palceYourOrder() {
      this.$emit('proceedToPay');
    },
  },
};
</script>

<style scoped>
.placeorder-panel-right-detail {
  border-radius: 0.3rem !important;
  padding: 30px 30px;
  color: #000;
  font-size: 1.2rem;
  font-weight: normal;
}
.placeorder-panel-right-detail p {
  text-align: left;
  color: #000;
  margin: 0;
  font-size: 1.4rem;
}
.placeorder-panel-right-detail p span {
  float: right;
  text-align: right;
  color: #000;
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
}
.placeorder-panel-right-detail h3 {
  text-align: left;
  color: #000;
  margin: 10px 0 0 0;
  font-size: 1.8rem;
}
.placeorder-panel-right-detail h3 span {
  float: right;
  text-align: right;
  color: #000;
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
}

.placeorder-panel-right-detail button {
  border-radius: 0.8rem !important;
  background-color: #2a9cf5;
  color: #fff;
  width: 100%;
  padding: 10px 0;
  border: 1px solid #2a9cf5;
  font-size: 1.6rem;
  margin-top: 15px;
}
.placeorder-panel-right-detail hr {
  margin: 1rem 0;
}
</style>
