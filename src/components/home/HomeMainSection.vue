<template>
  <main class="main">
    <div class="container">
      <div class="intro-wrapper">
        <div class="row">
          <!-- slider -->
          <div class="col-md-8 mb-4">
            <div
              class="owl-carousel owl-theme row gutter-no cols-1 animation-slider owl-dot-inner"
              data-owl-options="{'nav': true,'dots': true,'items': 1,'autoplay': true}"
            >
              <div
                class="intro-slide intro-slide1 banner banner-fixed br-sm"
                style="background-image: url(images/slide/slide-1.jpg); background-position:top center;"
              ></div>
              <div
                class="intro-slide intro-slide1 banner banner-fixed br-sm"
                style="background-image: url(images/slide/slide-1.jpg); background-position:top center;"
              ></div>
              <div
                class="intro-slide intro-slide1 banner banner-fixed br-sm"
                style="background-image: url(images/slide/slide-1.jpg); background-position:top center;"
              ></div>
            </div>
          </div>

          <!-- side offer -->
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-12 col-xs-6 mb-4">
                <div class="category-banner banner banner-fixed br-sm">
                  <figure>
                    <img
                      src="images/1-1.jpg"
                      alt=""
                      width=""
                      height=""
                      style="background-color: #605959;"
                    />
                  </figure>
                  <div class="banner-content">
                    <h3 class="banner-title text-white text-capitalize ls-25">
                      GET UPTO 30% OFF<br />ON MEDICAL EQUIPMENTS
                    </h3>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-xs-6 mb-4">
                <div class="category-banner banner banner-fixed br-sm">
                  <figure>
                    <img
                      src="images/1-2.jpg"
                      alt=""
                      width=""
                      height=""
                      style="background-color: #eff5f5;"
                    />
                  </figure>
                  <div class="banner-content">
                    <h3
                      class="banner-title text-white text-capitalize ls-25 mb-3"
                    >
                      GET 10% OFF ON<br />EVERY MEDICINE
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Shop Now -->
      <div class="info">
        Explore Daily Offers On Medicine, Skin Care, Women Care, Covid
        Essentials And Medical Equipments
        <a href="">Shop Now</a>
      </div>

      <!-- Brand -->
      <div class="bg-white-div">
        <h2>Featured Brand</h2>
        <div class="row">
          <div class="text-center brand">
            <img src="images/brand/brand-1.png" alt="" />
            <span>Dabar</span>
          </div>
          <div class="text-center brand">
            <img src="images/brand/brand-2.png" alt="" />
            <span>Cipla</span>
          </div>
          <div class="text-center brand">
            <img src="images/brand/brand-3.png" alt="" />
            <span>Hansaplast</span>
          </div>
          <div class="text-center brand">
            <img src="images/brand/brand-4.png" alt="" />
            <span>Mankind</span>
          </div>
          <div class="text-center brand">
            <img src="images/brand/brand-5.png" alt="" />
            <span>Truebasics</span>
          </div>
          <div class="text-center brand">
            <img src="images/brand/brand-6.png" alt="" />
            <span>Accu-Chek</span>
          </div>
          <div class="text-center brand">
            <img src="images/brand/brand-7.png" alt="" />
            <span>Abbott</span>
          </div>
          <div class="text-center brand">
            <img src="images/brand/brand-8.png" alt="" />
            <span>Zydus</span>
          </div>
          <div class="text-center brand">
            <a href="">View More</a>
          </div>
        </div>
      </div>

      <!-- Flash Deals -->
      <div class="bg-white-div">
        <h2>Flash Deals</h2>
        <div
          class="owl-carousel owl-theme row cols-lg-3 cols-md-4 cols-sm-3 cols-2"
          data-owl-options="{
                                    'nav': true,
                                    'autoplay': true,
                                    'dots': false,
                                    'margin': 20,
                                    'responsive': {
                                        '0': {
                                            'items': 3
                                        },
                                        '576': {
                                            'items': 4
                                        },
                                        '768': {
                                            'items': 6
                                        },
                                        '992': {
                                            'items': 8
                                        }
                                    }
                                }"
        >
          <div class="product">
            <figure class="product-media">
              <div class="product-label-group">
                <label class="product-label label-new">SALE!</label>
              </div>
              <a href="">
                <img
                  src="images/product/p-1.jpg"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/1.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <div class="product-label-group">
                <label class="product-label label-new">SALE!</label>
              </div>
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/2.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/3.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <div class="product-label-group">
                <label class="product-label label-new">SALE!</label>
              </div>
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/3.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/4.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/5.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/6.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/7.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Popular Combo Deals -->
      <div class="bg-white-div">
        <h2>Popular Combo Deals</h2>
        <div
          class="owl-carousel owl-theme row cols-lg-3 cols-md-4 cols-sm-3 cols-2"
          data-owl-options="{
                                    'nav': true,
                                    'autoplay': true,
                                    'dots': false,
                                    'margin': 20,
                                    'responsive': {
                                        '0': {
                                            'items': 3
                                        },
                                        '576': {
                                            'items': 4
                                        },
                                        '768': {
                                            'items': 6
                                        },
                                        '992': {
                                            'items': 8
                                        }
                                    }
                                }"
        >
          <div class="product">
            <figure class="product-media">
              <div class="product-label-group">
                <label class="product-label label-new">SALE!</label>
              </div>
              <a href="">
                <img
                  src="images/product/p-1.jpg"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/1.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <div class="product-label-group">
                <label class="product-label label-new">SALE!</label>
              </div>
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/2.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/3.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <div class="product-label-group">
                <label class="product-label label-new">SALE!</label>
              </div>
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/3.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/4.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/5.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/6.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/7.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Explore Something New -->
      <div class="bg-white-div">
        <h2>Explore Something New</h2>
        <div
          class="owl-carousel owl-theme row cols-lg-3 cols-md-4 cols-sm-3 cols-2"
          data-owl-options="{
                                    'nav': true,
                                    'autoplay': true,
                                    'dots': false,
                                    'margin': 20,
                                    'responsive': {
                                        '0': {
                                            'items': 3
                                        },
                                        '576': {
                                            'items': 4
                                        },
                                        '768': {
                                            'items': 6
                                        },
                                        '992': {
                                            'items': 8
                                        }
                                    }
                                }"
        >
          <div class="product">
            <figure class="product-media">
              <div class="product-label-group">
                <label class="product-label label-new">SALE!</label>
              </div>
              <a href="">
                <img
                  src="images/product/p-1.jpg"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/1.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <div class="product-label-group">
                <label class="product-label label-new">SALE!</label>
              </div>
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/2.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/3.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <div class="product-label-group">
                <label class="product-label label-new">SALE!</label>
              </div>
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/3.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/4.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/5.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/6.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <router-link to="/product">
                <a href="#">
                  <img
                    src="images/product/7.jpg"
                    alt="Product"
                    width="300"
                    height="338"
                  />
                </a>
              </router-link>
            </figure>
            <div class="product-details">
              <h4 class="product-name">
                <a href="">Optimum Nutrition (ON) Gold Standard 100%...</a>
              </h4>
              <span>packet of lb powder</span>
              <div class="ratings-container">
                <div class="ratings-per">
                  4.3%
                </div>
                <a href="" class="rating-reviews">(19 ratings)</a>
              </div>
              <div class="product-pa-wrapper mb-3">
                <div class="product-price-old">
                  MRP <del>1899</del> <span>16% off</span>
                </div>
                <div class="product-price"><span>1540</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Healthcare Devices -->
      <div class="bg-white-div">
        <h2>Healthcare Devices</h2>
        <div
          class="owl-carousel owl-theme row cols-lg-3 cols-md-4 cols-sm-3 cols-2"
          data-owl-options="{
                                    'nav': true,
                                    'autoplay': true,
                                    'dots': false,
                                    'margin': 20,
                                    'responsive': {
                                        '0': {
                                            'items': 3
                                        },
                                        '576': {
                                            'items': 4
                                        },
                                        '768': {
                                            'items': 6
                                        },
                                        '992': {
                                            'items': 8
                                        }
                                    }
                                }"
        >
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/11.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">BP Moniters</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/12.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Pulse Oximeter</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/11.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">BP Moniters</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/12.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Pulse Oximeter</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/11.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">BP Moniters</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/12.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Pulse Oximeter</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/11.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">BP Moniters</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/12.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Pulse Oximeter</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/11.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">BP Moniters</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/12.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Pulse Oximeter</a></h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Summer Essentials -->
      <div class="bg-white-div">
        <h2>Summer Essentials</h2>
        <div
          class="owl-carousel owl-theme row cols-lg-3 cols-md-4 cols-sm-3 cols-2"
          data-owl-options="{
                                    'nav': true,
                                    'autoplay': true,
                                    'dots': false,
                                    'margin': 20,
                                    'responsive': {
                                        '0': {
                                            'items': 3
                                        },
                                        '576': {
                                            'items': 4
                                        },
                                        '768': {
                                            'items': 6
                                        },
                                        '992': {
                                            'items': 8
                                        }
                                    }
                                }"
        >
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/22.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Sunscreen Products</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/33.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Mosquito Repellents</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/22.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Sunscreen Products</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/33.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Mosquito Repellents</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/22.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Sunscreen Products</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/33.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Mosquito Repellents</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/22.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Sunscreen Products</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/33.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Mosquito Repellents</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/22.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Sunscreen Products</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/33.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Mosquito Repellents</a></h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Coronavirus Prevention -->
      <div class="bg-white-div">
        <h2>Coronavirus Prevention</h2>
        <div
          class="owl-carousel owl-theme row cols-lg-3 cols-md-4 cols-sm-3 cols-2"
          data-owl-options="{
                                    'nav': true,
                                    'autoplay': true,
                                    'dots': false,
                                    'margin': 20,
                                    'responsive': {
                                        '0': {
                                            'items': 3
                                        },
                                        '576': {
                                            'items': 4
                                        },
                                        '768': {
                                            'items': 6
                                        },
                                        '992': {
                                            'items': 8
                                        }
                                    }
                                }"
        >
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/44.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name">
                <a href="">Mask ( N95, Surgical Etc.. )</a>
              </h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/55.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Thermometer</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/66.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name">
                <a href="">Oxygen Concentrators & Cans</a>
              </h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/44.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name">
                <a href="">Mask ( N95, Surgical Etc.. )</a>
              </h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/55.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Thermometer</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/66.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name">
                <a href="">Oxygen Concentrators & Cans</a>
              </h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/44.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name">
                <a href="">Mask ( N95, Surgical Etc.. )</a>
              </h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/55.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name"><a href="">Thermometer</a></h4>
            </div>
          </div>
          <div class="product">
            <figure class="product-media">
              <a href="">
                <img
                  src="images/product/66.png"
                  class="pt-0"
                  alt="Product"
                  width="300"
                  height="338"
                />
              </a>
            </figure>
            <div class="product-details text-center">
              <h4 class="product-name">
                <a href="">Oxygen Concentrators & Cans</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {};
</script>
