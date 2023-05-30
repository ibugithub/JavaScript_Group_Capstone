import tvShowApi from './api.js';
import '../style.css';
import love from '../assets/love.png';

class EventsHandler {
  constructor() {
    this.details = {};
  }

  // This function will load the default page
  onPageLoad = async () => {
    const mainElement = document.querySelector('.display-items');
    const data = await tvShowApi.gettingData();
    try {
      data.forEach((element) => {
        this.details.data = element;
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
      console.log(error);
      return error;
    }
  }

  // This function will handle the click event of comment button
  handleCommentBtnClick = () => {
    const commentBtn = document.querySelectorAll('.cmnt');
    commentBtn.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        this.resetMain();
        this.showCommentPopup(event);
      });
    });
  };

  // This function will reset the mainElement
  resetMain = () => {
    const mainElement = document.querySelector('.display-items');
    mainElement.innerHTML = '';
  }

  // This function will create a new container for comment popUp and asign it into the mainElement
  showCommentPopup = (event) => {
    // const items = '';
    console.log(this.details);
    const mainElement = document.querySelector('.display-items');
    mainElement.appendChild(event.target.closest('.items'));
  }
}

const eventhandler = new EventsHandler();
export default eventhandler;