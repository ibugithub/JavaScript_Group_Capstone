import tvShowApi from './api.js';
import loveCounter from './loveCounter.js';
import '../style.css';
import cancel from '../assets/cancel.png';
import love from '../assets/love.png';
import commentCounter from './commentCounter.js';

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
    const totals = document.querySelector('.total');
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
                      <img class="poster" src="${image.original}" alt="#" />
                      <h2 class="head-title">${name}</h2>
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
        const total = loveCounter.countItems();
        totals.textContent = `${total}`;
      }
    });
  };

  handleLikes = () => {
    const love = document.querySelectorAll('.love');
    love.forEach((element) => {
      element.addEventListener('click', (event) => {
        const id = event.target.getAttribute('id');
        loveCounter.countLove(event, id);
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

  // This function will create a new container for comment popUp and asign it into the mainElement
  showPopup = (event) => {
    const item = event.target.closest('.items');
    const id = event.target.getAttribute('data-id');
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
                        <div class="count">(<span class="cmntCount"></span>)</div>
                    </div>
                    <ul class="comments">
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
    this.afterCommentPopup(id);
    this.handleSubmitClick(id);
  }

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

  afterCommentPopup = async (id) => {
    const commentsData = await tvShowApi.getCommentData(id);
    const commentContainer = document.querySelector('.comments');
    const comntCountSec = document.querySelector('.cmntCount');
    if (commentsData.length === undefined) {
      const li = document.createElement('li');
      li.textContent = "There's no comment yet";
      commentContainer.appendChild(li);
      comntCountSec.textContent = 0;
    } else {
      commentsData.forEach((element) => {
        const li = `
          <li>
          <span>${element.creation_date}</span> <span>${element.username}</span> <span>${element.comment}</span>
          </li>
          `;
        commentContainer.insertAdjacentHTML('beforeend', li);
      });
      const cmntCount = commentCounter.countComment(id);
      cmntCount.then((result) => {
        comntCountSec.textContent = result;
      });
    }
  }

  handleSubmitClick = (id) => {
    const button = document.querySelector('#submit');
    button.addEventListener('click', ((event) => {
      event.preventDefault();
      const userName = document.querySelector('#name').value;
      const userComment = document.querySelector('#comment').value;
      const date = new Date();
      const commentDate = date.toISOString().slice(0, 10);
      const commentContainer = document.querySelector('.comments');
      if (userName.replace(/\s/g, '') !== '' && userComment.replace(/\s/g, '') !== '') {
        const response = tvShowApi.sendCommentData(id, userName, userComment);
        response.then((result) => {
          if (result.status === 201) {
            const comntCountSec = document.querySelector('.cmntCount');
            const li = `
              <li>
              <span>${commentDate}</span> <span>${userName}</span> <span>${userComment}</span>
              </li>
              `;
            commentContainer.insertAdjacentHTML('beforeend', li);
            const prevcounter = parseInt(comntCountSec.textContent, 10);
            comntCountSec.textContent = prevcounter + 1;
            document.querySelector('#name').value = '';
            document.querySelector('#comment').value = '';
          }
        });
      }
    }));
  }
}

const eventhandler = new EventsHandler();
export default eventhandler;
