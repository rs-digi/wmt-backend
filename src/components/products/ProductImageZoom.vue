<template>
  <div class="product-gallery product-gallery-sticky">
    <div
      class="product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1 gutter-no"
    >
      <figure class="product-image">
        <img v-if="product.imgUrl"
          :src="product.imgUrl"
          data-zoom-image="product.imgUrl"
          alt=""
          width="800"
          height="900"
        />
        <img v-else
          src="../../assets/images/product/p1.jpg"
          data-zoom-image="../../assets/images/product/p1.jpg"
          alt=""
          width="800"
          height="900"
        />
      </figure>
      <figure class="product-image">
        <img
          src="../../assets/images/product/3.jpg"
          data-zoom-image="../../assets/images/product/3.jpg"
          alt=""
          width="488"
          height="549"
        />
      </figure>
      <figure class="product-image">
        <img
          src="../../assets/images/product/7.jpg"
          data-zoom-image="../../assets/images/product/7.jpg"
          alt=""
          width="800"
          height="900"
        />
      </figure>
      <figure class="product-image">
        <img
          src="../../assets/images/product/5.jpg"
          data-zoom-image="../../assets/images/product/5.jpg"
          alt=""
          width="800"
          height="900"
        />
      </figure>
    </div>
    <div class="product-thumbs-wrap">
      <div class="product-thumbs row cols-4 gutter-sm">
        <div class="product-thumb active">
          <img
            src="../../assets/images/product/p1.jpg"
            alt=""
            width="800"
            height="900"
          />
        </div>
        <div class="product-thumb">
          <img
            src="../../assets/images/product/3.jpg"
            alt=""
            width="800"
            height="900"
          />
        </div>
        <div class="product-thumb">
          <img
            src="../../assets/images/product/7.jpg"
            alt=""
            width="800"
            height="900"
          />
        </div>
        <div class="product-thumb">
          <img
            src="../../assets/images/product/5.jpg"
            alt=""
            width="800"
            height="900"
          />
        </div>
      </div>
      <button class="thumb-up disabled">
        <i class="w-icon-angle-left"></i>
      </button>
      <button class="thumb-down disabled">
        <i class="w-icon-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props:["product"]
};
</script>

<style></style>
