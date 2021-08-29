<template>
  <home-main-section />
</template>

<script>
import HomeMainSection from '../components/home/HomeMainSection.vue';
// import { createNamespacedHelpers } from 'vuex';
// const { mapGetters } = createNamespacedHelpers('auth');
export default {
  components: {
    HomeMainSection,
  },
  // computed: {
  //   ...mapGetters(['isLogin']),
  // },
};
</script>
