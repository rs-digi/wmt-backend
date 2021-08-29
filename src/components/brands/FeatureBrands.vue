<template>
  <div class="featurebrands">
    <h3 class="home-row-title">{{ brands.title }}</h3>
    <ul>
      <li v-for="brand in brands.brandlist" :key="brand.id">
        <!-- <img :src="brand.avatar" :alt="brand.name" /> -->
        <img
          :src="brand.avatar"
          :alt="brand.name"
          style="width:100px;height:100px;"
        />
        <h5>{{ brand.name }}</h5>
      </li>
    </ul>
    <!-- <a href="#" @click.prevent="viewAllHandler">View more</a> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: {
        title: 'Feature brands',
        brandlist: [
          {
            name: 'cipla',
            avatar: 'images/brand/brand-1.png',
          },
          {
            name: 'Dabur',
            avatar: 'images/brand/brand-2.png',
          },
          {
            name: 'Hansaplast',
            avatar: 'images/brand/brand-3.png',
          },
          {
            name: 'Mankind',
            avatar: 'images/brand/brand-4.png',
          },
          {
            name: 'TrueBasics',
            avatar: 'images/brand/brand-5.png',
          },
          {
            name: 'Accu-check',
            avatar: 'images/brand/brand-6.png',
          },
          {
            name: 'Abott',
            avatar: 'images/brand/brand-7.png',
          },
          {
            name: 'Zydus',
            avatar: 'images/brand/brand-8.png',
          },
        ],
      },
    };
  },
  methods: {
    viewAllHandler() {
      alert('working on it');
    },
  },
};
</script>
