import tvShowApi from './modules/api.js';
import './style.css';
import love from './assets/love.png';

const mainElement = document.querySelector('.display-items');

const getData = async () => {
  const data = await tvShowApi.gettingData();
  try {
    data.forEach((element) => {
      if (element.show.image.original !== null) {
        const container = ` 
        <div class="items">
            <img src="${element.show.image.original}" alt="#" />
            <h2>${element.show.name}</h2>
            <div class="likes_love">
                <span>Likes</span>
                <img src="${love}">
            </div>
            <div class="comment_reserve"> 
                <button type="button" class="cmnt">Comments</button>
                <button type="button" class="rsrv">Reservation</button>
            </div>
        </div>
        `;
        mainElement.insertAdjacentHTML('beforeend', container);
      }
    });
    return 1;
  } catch (error) {
    return error;
  }
};

getData();