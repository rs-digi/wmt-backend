import axios from 'axios';

const API_URL = 'https://quiet-reaches-15229.herokuapp.com/api/';

class CartService {
  addCart(payload) {
    var data = JSON.stringify(payload);

    var config = {
      method: 'post',
      url:
        'https://quiet-reaches-15229.herokuapp.com/api/shoppingcart/addtocart',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    return axios(config);
  }
  getWishLisItems(customerId, shopping_cart_type_id) {
    return axios.get(API_URL + 'shoppingcart', {
      params: {
        customerid: customerId,
        shopping_cart_type_id,
      },
    });
  }
}

export default new CartService();
