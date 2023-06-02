import tvShowApi from './api.js';
import count from './counter.js';
import '../style.css';
import cancel from '../assets/cancel.png';
import love from '../assets/love.png';

class EventsHandler {
  onPageLoad = async () => {
    const data = await tvShowApi.getShowData();
    const loveData = await tvShowApi.getLoveData();
    this.loadHome(data, loveData);
    this.handleLikes();
    this.handleCommentBtnClick();
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
                        <button type="button" data-id="${id}" showType=${element.show.type} lang = ${element.show.language}  runtime = ${element.show.runtime} premiered = ${element.show.premiered} class="cmnt">Comments</button>
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
        count.countLove(event, id);
        tvShowApi.sendLoveData(id);
      });
    });
  }

  // This function will handle the click event of comment button
  handleCommentBtnClick = () => {
    const commentBtn = document.querySelectorAll('.cmnt');
    commentBtn.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        this.showPopup(event);
      });
    });
  };

  // To handle the clik in cancel button
  handleCancleClick = () => {
    const cancelImg = document.querySelector('#cancelImg');
    const mainElement = document.querySelector('.homepage');
    const popUp = document.querySelector('.popupContainer');
    const itemContainer = document.querySelector('.display-items');
    cancelImg.addEventListener('click', () => {
      mainElement.removeChild(popUp);
      itemContainer.classList.remove('blur');
    });
  }

  // This function will create a new container for comment popUp and asign it into the mainElement
  showPopup = (event) => {
    const item = event.target.closest('.items');
    const showImageSrc = item.querySelector('img').getAttribute('src');
    const name = item.querySelector('h2').textContent;
    const type = event.target.getAttribute('showType');
    const language = event.target.getAttribute('lang');
    const premiered = event.target.getAttribute('premiered');
    const duration = event.target.getAttribute('runtime');
    const commentPopup = `
        <section class="popupContainer">
            <div class="popupSection">
                <div class="imgContainer">
                    <div class="imgComment">
                    <img id="showImg" src="${showImageSrc}" alt="">
                    </div>
                    
                    <div class="cancelSection">
                    <img id="cancelImg" src="${cancel}" alt="">
                    </div>
                </div>
                <div class="name">
                    <h2>${name}</h2>
                </div>
                <div class="detailBlock">
                    <ul class="leftBlock">
                        <li>Type: ${type}</li>
                        <li>Language: ${language}</li>
                    </ul>
                    <ul class="rightBlock">
                        <li>Duration: ${duration} minutes</li>
                        <li>Premiered: ${premiered}</li>
                    </ul>
                </div>
                <div class="commentSection">
                    <div class="title_count">
                        <div class="title">Comments</div>
                        <div class="count">()</div>
                    </div>
                    <ul class="comments">
                        <li>This is first comment</li>
                        <li>This is second comment</li>
                        <li>This is the third comment</li>
                    </ul>
                </div>
                <div class="commentsAddingSection">
                    <div class="title">
                        <h5>Add a comment</h5>
                    </div>
                    <form class="commentForm">
                        <input placeholder="Your name" type="text" name="" id="name">
                        <textarea placeholder="Your insights" name="" id="comment" cols="30" rows="10"></textarea>
                        <button id="submit" type="submit">Comment</button>
                    </form>
                </div>
            </div>
        </section>
        `;
    const mainElement = document.querySelector('.homepage');
    const itemContainer = document.querySelector('.display-items');
    mainElement.insertAdjacentHTML('beforeend', commentPopup);
    itemContainer.classList.add('blur');
    this.handleCancleClick();
  }
}

const eventhandler = new EventsHandler();
export default eventhandler;
