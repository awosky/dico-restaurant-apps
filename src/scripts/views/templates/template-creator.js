import CONFIG from '../../globals/config';
 
const createRestaurantItemTemplate = (restaurant) => `
    <article class="post-item">
        <div class="post-item__container">
            <img class="post-item__thumbnail"
                src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
                alt="Gambar Restaurant ${restaurant.name}">
            <p class="post-item__container-text">${restaurant.city}</p>
        </div>
        <div class="post-item__content">
            <p class="post-item__date">Rating: ${restaurant.rating}
            </p>
            <h1 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
            <p class="post-item__description">
                ${restaurant.description.slice(0, 300)}
            </p>
        </div>
    </article>
`;
 
const createRestaurantDetailTemplate = (detail) => `
    <div class="restaurantDetail__container" >
        <img class="restaurantDetail__thumbnail"
            src="${CONFIG.BASE_IMAGE_URL + detail.restaurant.pictureId}"
            alt="Gambar Restaurant ${detail.restaurant.name}">
        <div class="restaurantDetail__info">
            <h2 class="restaurantDetail__info__title">Information</h2>
            <h3>Name</h3>
            <p>${detail.restaurant.name}</p>
            <h3>Categories</h3>
            <p id="restaurantDetail__info__categories" class="restaurantDetail__info__categories"></p>
            <h3>City</h3>
            <p>${detail.restaurant.city}</p>
            <h3>Address</h3>
            <p>${detail.restaurant.address}</p>
            <h3>Rating</h3>
            <p>★${detail.restaurant.rating}</p>
            <h3>Description</h3>
            <p>${detail.restaurant.description}</p>
        </div>
    </div>
    <div class="restaurantDetail__menus">
        <h2> Menus </h2>
        <h3> Foods </h3>
        <div id="restaurantDetail__menus__foods" class="restaurantDetail__menus__foodsdrinks"></div>
        <h3> Drinks </h3>
        <div id="restaurantDetail__menus__drinks" class="restaurantDetail__menus__foodsdrinks"></div>
    </div>
  
  `;

  const createCategoriesTemplate = (category) => `
    <span> ${category.name} </span>&nbsp
  `;

  const createFoodsDrinksTemplate = (foods, type) => `
    <div class="restaurantDetail__foodsdrinks__container">
        <img class="restaurantDetail__foodsdrinks__thumbnail"
        src="${type == CONFIG.FOOD_TYPE? CONFIG.BASE_IMAGE_URL_FOODS : CONFIG.BASE_IMAGE_URL_DRINK}"
        alt="Gambar ${foods.name}">
        <p class="restaurantDetail__foodsdrinks__container-text">${foods.name.toUpperCase()}</p>
    </div>
  `;

  
    const createLikeButtonTemplate = () => `
        <button aria-label="like this movie" id="likeButton" class="like">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
        </button>
    `;

    const createLikedButtonTemplate = () => `
        <button aria-label="unlike this movie" id="likeButton" class="like">
            <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
    `;
 
export { 
     createRestaurantItemTemplate,
     createRestaurantDetailTemplate,
     createCategoriesTemplate,
     createFoodsDrinksTemplate,
     createLikeButtonTemplate,
     createLikedButtonTemplate };