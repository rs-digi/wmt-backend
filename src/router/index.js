import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import Login from '../components/login/Login.vue';
import Signup from '../components/signup/Signup.vue';
import StartSelling from '../components/seller/Seller.vue';
import RegisterSeller from '../components/seller/RegisterSeller.vue';
import Cart from '../views/Cart';
import CartCheckout from '../views/CartCheckout';
import ShippingAddress from '../views/ShippingAddress';
import ThanksForOrder from '../views/ThanksForOrder';
import Product from '../views/Product.vue';
import SearchProducts from '../views/SearchProducts.vue';
import Home from '../views/Home.vue';
import TrackOrder from '../views/TrackOrder.vue';
import NotFound from '../views/NotFound.vue';
import AddCategory from '../components/addcategory/AddCategory.vue';


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/productcatalog',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/addcategory',
    name: 'Add Category',
    component: AddCategory,
  },
  {
    path: '/startselling',
    name: 'Start Selling',
    component: StartSelling,
  },
  {
    path: '/registerseller',
    name: 'Register Seller',
    component: RegisterSeller,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },

  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/cart/address',
    name: 'address',
    component: ShippingAddress,
  },
  {
    path: '/cart/checkout',
    name: 'checkout',
    component: CartCheckout,
  },
  {
    path: '/thanksfororder',
    name: 'thanks',
    component: ThanksForOrder,
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/product/search/:name',
    name: 'SearchProducts',
    component: SearchProducts,
  },
  {
    path: '/trackorder',
    name: 'TrackOrder',
    component: TrackOrder,
  },
  { path: '/404', name: 'NotFound', component: NotFound },
  { path: '/:catchAll(.*)', redirect: '/404' },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  },
});

export default router;
