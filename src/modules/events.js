import tvShowApi from './api.js';
import '../style.css';
import love from '../assets/love.png';

class EventsHandler {
    // This function will load the default page
    onPageLoad = async () => {
      const mainElement = document.querySelector('.display-items');
      const data = await tvShowApi.gettingData();
      const appId = 'jDmx1fPvHr5KpfZ0L9Bv';
      try {
        data.forEach(async (element) => {
          if (element.show.image.original !== null) {
            const { id, name, image } = element.show;
            const count = await tvShowApi.fetchItemLikes(appId, id);
            const container = `
              <div class="items">
                <img src="${image.original}" alt="#" />
                <h2>${name}</h2>
                <div class="likes_love">
                  <span>Likes: ${count}</span>
                  <button class="love" id="love-${id}"><img src="${love}"></button>
                </div>
                <div class="comment_reserve">
                  <button type="button" data-id="${id}" class="cmnt">Comments</button>
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
}

const eventhandler = new EventsHandler();
export default eventhandler;