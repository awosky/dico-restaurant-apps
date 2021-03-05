import API_ENDPOINT from '../globals/api-endpoint';
 
class TheRestaurantSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
 
  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
 
export default TheRestaurantSource;