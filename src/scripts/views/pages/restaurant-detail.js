import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/restaurant-source';
import { 
  createRestaurantDetailTemplate,
  createCategoriesTemplate,
  createFoodsDrinksTemplate }
  from '../templates/template-creator';
import CONFIG from '../../globals/config';

const RestaurantDetail = {
    async render() {
      return `
        <div id="restaurant" class="restaurantDetail"></div>
      `;
    },
   
    async afterRender() {
      const header = document.querySelector('#header');
      header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await TheRestaurantSource.restaurantDetail(url.id);
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      const restaurantCategories = document.querySelector('#restaurantDetail__info__categories');
      restaurant.restaurant.categories.forEach((category) => {
        restaurantCategories.innerHTML += createCategoriesTemplate(category);
      });
      
      const restaurantMenusFoods = document.querySelector('#restaurantDetail__menus__foods');
      restaurant.restaurant.menus.foods.slice(0,8).forEach((food) => {
        restaurantMenusFoods.innerHTML += createFoodsDrinksTemplate(food, CONFIG.FOOD_TYPE);
      });

      const restaurantMenusDrinks = document.querySelector('#restaurantDetail__menus__drinks');
      restaurant.restaurant.menus.drinks.slice(0,8).forEach((drink) => {
        restaurantMenusDrinks.innerHTML += createFoodsDrinksTemplate(drink, CONFIG.DRINK_TYPE);
      });
    },
  };
   
  export default RestaurantDetail;