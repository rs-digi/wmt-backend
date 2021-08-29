import axios from 'axios';

const API_URL = 'https://cryptic-hollows-09186.herokuapp.com/api/';

class OrderService {
  //   addCart(payload) {
  //     var data = JSON.stringify(payload);

  //     var config = {
  //       method: 'post',
  //       url:
  //         'https://quiet-reaches-15229.herokuapp.com/api/shoppingcart/addtocart',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       data: data,
  //     };
  //     return axios(config);
  //   }
  checkoutOrder(orderId) {
    return axios.post(API_URL + 'order/checkout/' + orderId);
  }
}

export default new OrderService();
