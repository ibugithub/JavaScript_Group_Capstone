import tvShowApi from './api.js';
import count from './counter.js';
import '../style.css';
import love from '../assets/love.png';

class EventsHandler {
  onPageLoad = async () => {
    const data = await tvShowApi.getShowData();
    const loveData = await tvShowApi.getLoveData();
    this.loadHome(data, loveData);
    this.handleLikes();
  }

  loadHome = (data, loveData) => {
    const mainElement = document.querySelector('.display-items');
    data.forEach((element) => {
      if (element.show.image.original !== null) {
        const { id, name, image } = element.show;
        let count = 0;
        if (loveData.length > 0) {
          loveData.forEach((element) => {
            if (element.item_id === id) {
              console.log('hey find you');
              count = element.likes;
            }
          });
        }
        const container = `
                    <div class="items">
                      <img src="${image.original}" alt="#" />
                      <h2>${name}</h2>
                      <div class="likes_love">
                        <span id=${id}>Likes: <span class="innerSpan" >${count}</span> </span>
                        <button class="love"><img id=${id} src="${love}"></button>
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
  }

  handleLikes = () => {
    const love = document.querySelectorAll('.love');
    love.forEach((element) => {
      element.addEventListener('click', (event) => {
        const id = event.target.getAttribute('id');
        console.log('hello', event.target.getAttribute('id'));
        count.countLove(event, id);
        tvShowApi.sendLoveData(id);
      });
    });
  }
}

const eventhandler = new EventsHandler();
export default eventhandler;
