<template>
  <div class="tab tab-nav-boxed tab-nav-underline product-tabs">
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a href="#product-tab-description" class="nav-link active"
          >Product Details</a
        >
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" id="product-tab-description">
        <div class="row mb-4">
          <div class="col-md-12 mb-5">
            <p>
              <b>{{ product.full_description }}</b> No
            </p>
            <p><b>Is Discontinued By Manufacturer:</b> No</p>
            <p>
              <b>Product Dimensions:</b> 19.05 x 6.98 x 28.89 cm; 453.59 Grams
            </p>
            <p><b>Date First Available:</b> 1 January 2017</p>
            <p>
              <b>Manufacturer:</b> Manufactured for Optimum Nutrition, Inc. by
              Tirupati Lifesciences
            </p>
            <p><b>ASIN:</b> B019T0K132</p>
            <p><b>Item part number:</b> ONGSPChc</p>
            <p><b>Country of Origin:</b> India</p>
            <p>
              <b>Manufacturer:</b> Manufactured for Optimum Nutrition, Inc. by
              Tirupati Lifesciences, Manufactured for Optimum Nutrition, Inc. by
              Tirupati Lifesciences, Manufactured for OPTIMUM NUTRITION, INC. By
              Tirupati Lifesciences.
            </p>
            <p>
              <b>Item Dimensions LxWxH ‏ : x 7 x 28.9 Centimeters</b>
            </p>
            <p><b>Net Quantity:</b> 454.0 gram</p>
            <p>
              <b>Included Components:</b> 1 unit of Optimum Nutrition (ON) Gold
              Standard 100% Whey Protein Powder - 1 lb (Double Rich Chocolate),
              Primary Source Isolate (Packaging May Vary)
            </p>
            <p><b>Generic Name:</b> Protein Powder</p>
            <p><b>Best Sellers Rank:</b> #248 in Health & Personal Car</p>
            <h4 class="title tab-pane-title font-weight-bold mt-4">
              From the manufacturer
            </h4>
            <div class="text-center">
              <img class="mb-2" src="../../assets/images/product/p2.jpg" />
              <img src="images/product/p3.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>

<style></style>
