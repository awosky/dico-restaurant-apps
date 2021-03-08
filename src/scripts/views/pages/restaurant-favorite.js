import Restaurantdb from '../../data/restaurant-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';
 
const Favorite = {
  async render() {
    return `
      <div class="content">
            <div class="latest">
                <h1 class="latest__label">Your Favorite Restaurant</h1>
                <div id="restaurants" class="posts">

                </div>
            </div>
        </div>
    `;
  },
 
  async afterRender() {
    const restaurants = await Restaurantdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
 
export default Favorite;