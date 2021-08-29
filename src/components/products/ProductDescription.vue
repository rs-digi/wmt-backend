<template>
  <div class="product-details" data-sticky-options="{'minWidth': 767}">
    <h2 class="product-title">
      {{ product.name }}
    </h2>
    <a href="">Visit the {{ product.name }} Store</a>

    <div class="mt-1 ratings-container">
      <div class="ratings-full">
        <span class="ratings" style="width: 80%;"></span>
        <span class="tooltiptext tooltip-top"></span>
      </div>
      <a href="#product-tab-reviews" class="rating-reviews scroll-to"
        >(3 Reviews)</a
      >
    </div>
    <p class="product-detail-p">
      <b>M.R.P.: &#8377; {{ product.price }}</b
      ><br />
      Deal of the Day:
      <b>best deals</b><br />
      Inclusive of all taxes
    </p>
    <p class="product-detail-p">
      {{ product.short_description }}
      FREE delivery: Friday, July 9 <a href="">Details</a><br />
      Fastest delivery: Tomorrow<br />
      Order within 2 hrs and 1 min <a href="">Details</a><br />
    </p>

    <p class="product-detail-p">
      <b>Bank Offer:</b> Super Value Days: 10% Savings on ICICI Bank Cards
      <a href="">Details</a>
    </p>

    <p class="product-detail-p">
      <b>No Cost EMI:</b> Avail No Cost EMI on select cards for orders above
      &#8377;3000 <a href="">Details</a>
    </p>
    <p class="product-detail">
      Best Before: 21 Jan 2023s
      <span class="in-stock text-left"
        >In stock Quantity: {{ product.quantity }}</span
      >
    </p>
    <p class="product-detail">Flavour Name : <b>Flavour name</b></p>
    <table class="specification">
      <tr>
        <td width="20%"><b>Design</b></td>
        <td>Whey</td>
      </tr>
      <tr>
        <td><b>Ingredients</b></td>
        <td>
          Protein Blend (Whey Protein Isolate, Whey Protein Concentrate, Whey
          Protein Peptides), Cocoa Powder....
        </td>
      </tr>
      <tr>
        <td><b>Flavour</b></td>
        <td>Double Rich Chocolate</td>
      </tr>
      <tr>
        <td><b>Brand</b></td>
        <td>{{ product.name }}</td>
      </tr>
      <tr>
        <td><b>Item Weight</b></td>
        <td>453.59 Grams</td>
      </tr>
      <tr>
        <td><b>Allergen</b></td>
        <td>Milk</td>
      </tr>
      <tr>
        <td colspan="2"><a href="">See More</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>

<style></style>
