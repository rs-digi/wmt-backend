<template>
  <div>
    <img :src="productrs.imageurl" style="width:150px;height:150px;" />
    <!-- <img src="../../assets/images/ONGold.jpg" /> -->
    <span class="sale">{{ productrs.sale }}</span>
    <h3 class="title">{{ productrs.title }}</h3>
    <p class="subtitle">{{ productrs.subtitle }}</p>
    <p class="rating">
      <span>{{ productrs.ratingpercentage }}</span
      >{{ productrs.ratingcount }} ratings
    </p>
    <p class="price">
      MRP <span class="crossprice">{{ productrs.crossprice }}</span
      ><span class="priceoff">{{ productrs.priceoff }}% off</span>
    </p>
    <p class="finalprice">{{ productrs.finalprice }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['productrs'],
};
</script>
