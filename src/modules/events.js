import tvShowApi from './api.js';
import '../style.css';
import love from '../assets/love.png';

class EventsHandler {
    // This function will load the default page
    onPageLoad = async () => {
      const mainElement = document.querySelector('.display-items');
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
                      <button type="button" data-id=${element.show.id} class="cmnt">Comments</button>
                      <button type="button" class="rsrv">Reservation</button>
                  </div>
              </div>
              `;
            mainElement.insertAdjacentHTML('beforeend', container);
          }
        });
        this.handleCommentBtnClick();
        return 1;
      } catch (error) {
        return error;
      }
    }
}

const eventhandler = new EventsHandler();
export default eventhandler;