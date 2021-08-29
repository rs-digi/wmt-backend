<template>
  <div class="row mb-4">
    <div class="col-md-4">
      <img src="@/assets/images/product_1.jpg" class="product-img" />
    </div>
    <div class="col-md-8">
      <p class="product-name">{{ product.name }}</p>
      <p class="rating">
        <i class="fa fa-star yellow"></i><i class="fa fa-star yellow"></i
        ><i class="fa fa-star yellow"></i><i class="fa fa-star yellow"></i
        ><i class="fa fa-star gray"></i>
      </p>
      <p class="price">&#8377; {{ product.price }}</p>
      <a href="" class="buying">See all buying options</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>

<style scoped></style>
