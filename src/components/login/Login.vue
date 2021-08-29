<template>
  <div class="mb-4">
    <div class="container bg-white">
      <div class="row">
        <div class="logohead d-flex justify-content-center align-items-center ">
          <img @click="logoJump" src="../../assets/images/logo.png" />
        </div>
      </div>
      <div class="row py-3 ">
        <form @submit.prevent="loginHandler" class="formbox ">
          <div class="alert alert-danger" role="alert" v-if="isValidUser">
            Please check your user id and password.
          </div>
          <div class="loginform ">
            <h1 class="text-center">Sign-In</h1>

            <div class="email-login">
              <label for="email">Account</label>
              <input
                type="text"
                placeholder="Enter email address or member ID"
                name="uname"
                required
                v-model="userid"
              />
              <label for="psw"
                >Password<a
                  href="#"
                  style="font-size:11px; text-decoration:none; margin-left:140px;"
                  >Forget Password.?</a
                ></label
              >
              <div class="show-password">
                <input
                  :type="passwordFieldType"
                  placeholder="Enter Password"
                  name="psw"
                  required
                  v-model="userpassword"
                />
                <button
                  type="button"
                  class="password-icon"
                  @click.prevent="showHidePassword"
                >
                  <i
                    class="fa fa-eye"
                    v-if="showPassword"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-eye-slash" v-else aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <label for="checkbox">
              <span style="font-size:14px; font-weight:500;"
                ><input id="checkbox" type="checkbox" v-model="userconfirm" />
                &nbsp;Stay signed in</span
              ></label
            >
            <br />
            <div>
              <button class="signbtn">Sign in</button>
            </div>

            <div>
              <p>
                <a href="#" style="font-size:11px; text-decoration:none;"
                  >Mobile number sign in</a
                >
                <router-link
                  style="font-size:11px; margin-left:140px; text-decoration:none;"
                  to="/signup"
                  >Join Free...</router-link
                >
              </p>
            </div>

            <hr style="width:95%; margin-left:-5px;" />

            <div class="thirdparty">
              Sign in with :
              <a href="#"><img src="../../assets/images/fb.png"/></a>
              <a href="#"><img src="../../assets/images/go.png"/></a>
              <a href="#"><img src="../../assets/images/in.png"/></a>
              <a href="#"><img src="../../assets/images/tw.png"/></a>
            </div>
          </div>
        </form>
      </div>

      <div class="row">
        <div class="form-or">
          <p class="or text-center"><span>or</span></p>
          <!-- <router-link to="/signup"> -->
          <button id="accountbtn" @click="openSignup">Create Account</button>
          <!-- </router-link> -->
        </div>
        <br /><br />
      </div>
    </div>
  </div>
  <div v-if="loading" class="loading-container">
    <spinner />
  </div>
  <footer-bottom />
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FooterBottom from '../footer/FooterBottom.vue';
import Spinner from '../Spinner.vue';
const { mapGetters } = createNamespacedHelpers('auth');
export default {
  components: { FooterBottom, Spinner },
  // data(){
  //   return{
  //     userid:'',
  //     userpassword:'',
  //     userconfirm:false,
  //     isValidUser: false
  //   }
  // },
  // methods:{
  //   loginHandler(){
  //     if(this.userconfirm){
  //       let user = {
  //         "username":this.userid,
  //         "password":this.userpassword
  //       }
  //       this.$store.dispatch("auth/login", user).then(
  //       () => {
  //         this.$router.push("/");
  //       },
  //       (error) => {
  //        console.log(error)
  //         this.isValidUser = true;
  //       })
  //     }
  // },
  //   createAccount(){
  //     this.$router.push('/signup')
  //   },
  //   logoJump(){
  //     this.$router.push('/')
  //   }
  // },
  data() {
    return {
      userid: '',
      userpassword: '',
      userconfirm: true,
      isValidUser: false,
      loading: false,
      showPassword: false,
    };
  },
  computed: {
    ...mapGetters(['userInfo', 'isLogin']),
    passwordFieldType() {
      return this.showPassword ? 'text' : 'password';
    },
  },
  methods: {
    logoJump() {
      this.$router.push('/');
    },
    async loginHandler() {
      try {
        this.loading = true;
        let res = await this.$store.dispatch('auth/userLogin', {
          username: this.userid,
          password: this.userpassword,
        });
        this.loading = false;
        if (res != 'success') {
          alert(res);
        }
        if (this.isLogin) {
          this.$router.push('/productcatalog');
        }
      } catch (err) {
        console.log(err);
        this.loading = false;
      }
    },
    openSignup() {
      this.$router.push('/signup');
    },
    showHidePassword() {
      return (this.showPassword = !this.showPassword);
    },
  },
};
</script>
<style scoped>
.loading-container {
  width: 100%;
  height: 100vh;
  background-color: #3f373700;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;
}

input[type='text'],
input[type='password'] {
  padding: 5px 20px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  width: 94%;
}

input:focus {
  -webkit-box-shadow: 0px 0px 1.5px 1.5px rgba(0, 174, 239, 0.9);
  -moz-box-shadow: 0px 0px 1.5px 1.5px rgba(0, 174, 239, 0.9);
  box-shadow: 0px 0px 1.5px 1.5px rgba(0, 174, 239, 0.9);
  outline: 0;
}

select {
  padding: 8px 20px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  width: 94%;
  font-size: 12px;
}

select:focus {
  padding: 8px 20px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  width: 94%;
}
.show-password {
  position: relative;
}
.password-icon {
  position: absolute;
  right: 25px;
  top: 8px;
  background: transparent;
  border: 0px;
  padding: 5px;
}
</style>
