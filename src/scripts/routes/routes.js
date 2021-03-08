import RestaurantList from '../views/pages/restaurant-list';
import RestaurantDetail from '../views/pages/restaurant-detail';
import Favorite from '../views/pages/restaurant-favorite';
 
const routes = {
  '/': RestaurantList, 
  '/home': RestaurantList,
  '/favorite': Favorite,
  '/detail/:id': RestaurantDetail,
};
 
export default routes;