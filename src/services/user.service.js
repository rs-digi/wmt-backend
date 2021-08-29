import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://polar-reef-85905.herokuapp.com/api/';

class UserService {
  getProducts() {
    return axios.get(API_URL + 'products', { headers: authHeader() });
  }
  getProductById(productId) {
    return axios.get(API_URL + 'product/' + productId, {
      headers: authHeader(),
    });
  }
  searchProducts(key) {
    return axios.get(API_URL + 'product/search/' + key, {
      headers: authHeader(),
    });
  }
  getCategories() {
    return axios.get(API_URL + 'allcategory', { headers: authHeader() });
  }
}

export default new UserService();
