import TheRestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
    async render() {
      return `
        <div class="jumbotron">
            <div class="hero">
                <div class="hero__inner">
                    <h1 class="hero__title">A Premium And Authentic Flavour</h1>
                    <p class="hero__tagline">New summer menus available from 12th Sept</p>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="latest">
                <h1 class="latest__label">Explore Restaurant</h1>
                <div class="posts">

                </div>
            </div>
        </div>
      `;
    },
   
    async afterRender() {
        const header = document.querySelector('#header');
        header.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        const restaurants = await TheRestaurantSource.restaurantList();
        const restaurantsContainer = document.querySelector('.posts');
        restaurants.slice(0,18).forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
  };
   
  export default RestaurantList;