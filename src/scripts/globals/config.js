const CONFIG = {
    BASE_URL: 'https://restaurant-api.dicoding.dev/',
    BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/medium/',
    BASE_IMAGE_URL_FOODS: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    BASE_IMAGE_URL_DRINK: 'https://images.unsplash.com/photo-1550247611-e651810312fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    FOOD_TYPE: 0,
    DRINK_TYPE:1,
    // CACHE_NAME: 'Restaurant-v1',
    CACHE_NAME: new Date().toISOString(), //dev only
    DATABASE_NAME: 'restaurant-database',
    DATABASE_VERSION: 1,
    OBJECT_STORE_NAME: 'restaurants',
  };
  
  export default CONFIG;