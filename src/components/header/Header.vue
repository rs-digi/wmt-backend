<template>
  <!-- Start of Header -->
  <header class="header">
    <div class="header-middle">
      <div class="container">
        <div class="header-left mr-md-4">
          <a href="#" class="mobile-menu-toggle w-icon-hamburger"></a>
          <router-link to="/">
            <a href="" class="logo ml-lg-0">
              <img
                src="@/assets/images/logo.png"
                alt="logo"
                width="145"
                height="45"
              />
            </a>
          </router-link>
        </div>
        <div class="header-right ml-4">
          <div
            class="header-call d-xs-show d-lg-flex align-items-center dropdown"
          >
            <a href="" @click.prevent class="user-account ml-lg-0">
              <div class="ml-10">
                Hello, {{ userName }}
                <span>Account</span>
              </div>
            </a>
            <div class="dropdown-box pt-4 pb-4 ">
              <a href="" @click.prevent="logoutHandler" class="">{{
                loginButton
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- End of Header -->
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('auth');
export default {
  data() {
    return {
      categories: [
        'All Products',
        'cipla',
        'Dabur',
        'Hansaplast',
        'Mankind',
        'TrueBasics',
        'Accu-check',
        'Abott',
        'Zydus',
      ],
      searchKey: '',
      selectedCategory: 'All Products',
    };
  },
  computed: {
    ...mapGetters(['isLogin', 'userInfo']),
    loginButton() {
      let btn = this.isLogin ? 'Sign Out' : 'Sign In';
      return btn;
    },
    userName() {
      return this.isLogin ? this.userInfo.username : '';
    },
  },
  methods: {
    logoutHandler() {
      if (this.isLogin) {
        console.log(this.userInfo);
        this.$store.dispatch('auth/isLogin', false);
        this.$store.dispatch('resetAll');
        this.$router.push('/');
      } else {
        this.$router.push('/login');
      }
    }
  },
};
</script>
