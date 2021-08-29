<template>
<div id="wrapper">
  <Header v-if="!isNoHeaderPage" />
  <div class="wrapper"><router-view /></div>
  <section-footer v-if="!isNoFooterPage" />
  <!-- Start of Scroll Top -->
  <a id="scroll-top" href="#top" title="Top" role="button" class="scroll-top"
    ><i class="fas fa-chevron-up"></i
  ></a>
  <!-- End of Scroll Top -->
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import SectionFooter from './components/footer/SectionFooter.vue';
// import { mapGetters } from 'vuex'
export default {
  components: {
    Header,
    SectionFooter,
  },
  computed: {
    isNoHeaderPage() {
      if (
        this.$route.name == 'Login' ||
        this.$route.name == 'Signup' ||
        this.$route.name == 'NotFound'
      ) {
        return true;
      }
      return false;
    },
    isNoFooterPage() {
      if (
        this.$route.name == 'Login' ||
        this.$route.name == 'Signup' ||
        this.$route.name == 'NotFound'
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
