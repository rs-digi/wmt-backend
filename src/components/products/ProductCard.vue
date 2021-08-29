<template>
  <div @click="openProductDetails">
    <img v-if="productrs.imgurl" :src="productrs.imgurl" />
    <img v-if="!productrs.imgurl" src="../../assets/images/dummyimage.jpg" />
    <span class="sale">Sale {{ productrs.quantity }}</span>
    <h3 class="title">{{ productrs.name }}</h3>
    <h4>{{ productrs.short_description }}</h4>
    <p class="subtitle">{{ productrs.full_description }}</p>
    <p class="finalprice">{{ productrs.price }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['productrs'],
  methods: {
    openProductDetails() {
      console.log(this.productrs);
      // this.scrollToTop();
      this.$router.push('/product/' + this.productrs._id);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
