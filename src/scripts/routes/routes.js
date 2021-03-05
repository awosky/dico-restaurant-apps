import RestaurantList from '../views/pages/restaurant-list';
import RestaurantDetail from '../views/pages/restaurant-detail';
 
const routes = {
  '/': RestaurantList, 
  '/home': RestaurantList,
  '/detail/:id': RestaurantDetail,
};
 
export default routes;