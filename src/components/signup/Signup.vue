<template>
  <div>
    <div class="container bg-white pb-4">
      <div class="row">
        <div class="logohead d-flex justify-content-center align-items-center">
          <img @click="logoJump" src="../../assets/images/logo.png" />
        </div>
      </div>
      <div class="row py-3">
        <form @submit.prevent="createAccount" class="formbox2">
          <div class="signupform">
            <div class="error-body" v-if="signupfail">
              <p>{{ message }}</p>
            </div>
            <div class="success-body" v-if="signupsucess">
              <p>{{ message }}</p>
              <p>User Name : {{ username }}</p>
            </div>
            <h1>Create Account</h1>
            <div class="email-login">
              <label for="country">Country/Region</label>
              <select id="countryslect" v-model="country" required>
                <option value="AF">Afghanistan</option>
                <option value="AX">Åland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia, Plurinational State of</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD"
                  >Congo, the Democratic Republic of the</option
                >
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Côte d'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curaçao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and McDonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN" selected>India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP"
                  >Korea, Democratic People's Republic of</option
                >
                <option value="KR">Korea, Republic of</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK"
                  >Macedonia, the former Yugoslav Republic of</option
                >
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Réunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthélemy</option>
                <option value="SH"
                  >Saint Helena, Ascension and Tristan da Cunha</option
                >
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin (French part)</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten (Dutch part)</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS"
                  >South Georgia and the South Sandwich Islands</option
                >
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela, Bolivarian Republic of</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="VI">Virgin Islands, U.S.</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
              <label for="username">User Name</label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                required
                v-model="username"
              />
              <label for="email">Email Address</label>

              <input
                type="text"
                placeholder="Enter email address or member ID"
                name="uname"
                required
                v-model="email"
              />
              <label for="psw">Login Password</label>
              <div class="show-password">
                <input
                  :type="passwordFieldType"
                  placeholder="Enter Password"
                  name="psw"
                  required
                  v-model="password"
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
              <label for="psw">Confirm Password</label>
              <div class="show-password">
                <input
                  :type="confirmPasswordFieldType"
                  placeholder="Enter Confirm Password"
                  name="conpsw"
                  required
                  v-model="confirmpassword"
                />
                <button
                  type="button"
                  class="password-icon"
                  @click.prevent="showHideConfirmPassword"
                >
                  <i
                    class="fa fa-eye"
                    v-if="showConfirmPassword"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-eye-slash" v-else aria-hidden="true"></i>
                </button>
              </div>
              <label for="companyname">Company Name</label>
              <input
                type="text"
                placeholder="Enter Your Company Name"
                name="cname"
                required
                v-model="companyname"
              />
              <div
                class="row"
                style="padding-left:3px; padding-right:8px; margin: auto;"
              >
                <div style="width:50%;">
                  <label for="firstname">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="fname"
                    required
                    v-model="firstname"
                  />
                </div>

                <div style="width:50%;">
                  <label for="companyname">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lname"
                    required
                    v-model="lastname"
                  />
                </div>
              </div>

              <label for="companyname">Telephone</label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                name="fname"
                required
                v-model="mobileno"
              />
            </div>
            <label for="checkbox">
              <p style="font-size:11px;  line-height: 12px;font-weight:500;">
                <input
                  id="checkbox"
                  type="checkbox"
                  required
                  v-model="confirmcreate"
                />
                &nbsp;While creating a website account: I agree to abide by the
                worldmedicaltrade.com Membership Agreement- Willing to receive
                emails from worldmedicaltrade.com members and services
              </p></label
            >
            <br />
            <div>
              <button class="signbtn" type="submit">
                Agree & Register
              </button>
              <p class="d-flex justify-content-center align-items-center">
                Already a member
              </p>
              <button type="button" class="signbtn" @click.prevent="openLogin">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div v-if="loading" class="loading-container">
    <spinner />
  </div>
  <footer-bottom class="mt-4" />
</template>

<script>
import FooterBottom from '../footer/FooterBottom.vue';
import Spinner from '../Spinner.vue';
export default {
  components: { FooterBottom, Spinner },
  data() {
    return {
      country: 'IN',
      confirmcreate: false,
      mobileno: '',
      lastname: '',
      firstname: '',
      companyname: '',
      password: '',
      email: '',
      confirmpassword: '',
      signupsucess: false,
      signupfail: false,
      message: '',
      loading: false,
      username: '',
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? 'text' : 'password';
    },
    confirmPasswordFieldType() {
      return this.showConfirmPassword ? 'text' : 'password';
    },
  },
  methods: {
    showHidePassword() {
      return (this.showPassword = !this.showPassword);
    },
    showHideConfirmPassword() {
      return (this.showConfirmPassword = !this.showConfirmPassword);
    },
    logoJump() {
      this.$router.push('/');
    },
    createAccount() {
      if (this.username != '' && this.email != '' && this.password != '') {
        let user = {
          username: this.username,
          email: this.email,
          password: this.password,
          role: ['vendor'],
        };
        this.loading = true;
        this.$store.dispatch('auth/register', user).then(
          (data) => {
            console.log(data);
            this.loading = false;
            this.signupsucess = true;
            this.signupfail = false;
            this.message = data.message;
            setTimeout(()=>{
               this.openLogin();
            }, 5000)           
          },
          (error) => {
            console.log(error);
            this.loading = false;
            this.message = error.response.data.message;
            this.signupsucess = false;
            this.signupfail = true;
          }
        );
      } else {
        alert('Please fill user details');
      }
    },
    hideModal() {
      this.signupsucess = false;
      this.signupfail = false;
    },
    openLogin() {
      this.$router.push('/login');
    },
  },
};
</script>
<style scoped>
.modal {
  display: block;
}
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
