import tvShowApi from './api.js';
import '../style.css';
import love from '../assets/love.png';

// class EventsHandler {
//   constructor() {
//     this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/'; // Add the API base URL
//   }

//   // This function will load the default page
//   onPageLoad = async () => {
//     const mainElement = document.querySelector('.display-items');
// const data = await tvShowApi.gettingData();
// const appId = 'jDmx1fPvHr5KpfZ0L9Bv'; //

//     try {
//       data.forEach(async (element) => {
//         if (element.show.image.original !== null) {
//           const { id, name, image } = element.show;
//           const count = await tvShowApi.fetchItemLikes(appId, id);
//           const container = `
//             <div class="items">
//               <img src="${image.original}" alt="#" />
//               <h2>${name}</h2>
//               <div class="likes_love">
//                 <span>Likes: ${count}</span>
//                 <button class="love"><img src="${love}"></button>
//               </div>
//               <div class="comment_reserve">
//                 <button type="button" data-id="${id}" class="cmnt">Comments</button>
//                 <button type="button" class="rsrv">Reservation</button>
//               </div>
//             </div>
//           `;

//           mainElement.insertAdjacentHTML('beforeend', container);
//         }
//       });
//       this.handleLikes();
//       return 1;
//     } catch (error) {
//       console.log('Error loading the default page:', error);
//       return error;
//     }
//   };

//   handleLikes = () => {
//     console.log('button has been clicked');
//     const love = document.querySelectorAll('.love');
//     console.log(love);
//     love.forEach((element) => {
//       console.log(element);
//       element.addEventListener('click', (event) => {
//         console.log('hello', event.target);
//       });
//     });
//   }
//   // handleLikes = async (appId, id) => {
//   //   const loveButton = document.querySelector(`#love-${id}`);
//   //   loveButton.addEventListener('click', async () => {
//   //     try {
//   //       // Retrieve the current like count for the item
//   //       const count = await this.fetchItemLikes(appId, id);

//   //       // Increment the like count by 1
//   //       const updatedCount = count + 1;
//   //       const updateURL = `${this.url}apps/${appId}/likes`;

//   //       // Update the like count in the API
//   //       updateLikeCount(id, updatedCount, updateURL);

//   //       // Update the UI or perform other actions with the updated like count
//   //       console.log(`Updated like count for item ${id}: ${updatedCount}`);

//   //       // Update the displayed like count
//   //       const likesSpan = document.querySelector(`#love-${id} ~ span`);
//   //       likesSpan.textContent = `Likes: ${updatedCount}`;
//   //     } catch (error) {
//   //       console.error('Error handling like count:', error);
//   //     }
//   //   });
//   // };
// }

class EventsHandler {
  // This function will load the default page
  onPageLoad = async () => {
    const data = await tvShowApi.gettingData();
    const loveData = await tvShowApi.fetchItemLikes();
    this.loadHome(data, loveData);
    this.handleCommentBtnClick();
    this.handleLikes();
  }

  // This function will handle the click event of comment button
  handleCommentBtnClick = () => {
    const commentBtn = document.querySelectorAll('.cmnt');
    commentBtn.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        this.resetMain();
        this.showPopup(event);
      });
    });
  };

  // To handle the clik in cancel button
  handleCancleClick = () => {
    const cancelImg = document.querySelector('#cancelImg');
    cancelImg.addEventListener('click', () => {
      this.resetMain();
      this.onPageLoad();
    });
  }

  // This function will reset the mainElement
  resetMain = () => {
    const mainElement = document.querySelector('.display-items');
    mainElement.innerHTML = '';
  }

  loadHome = async (data, loveData) => {
    console.log('the count is', loveData);
    const mainElement = document.querySelector('.display-items');
    data.forEach(async (element) => {
      if (element.show.image.original !== null) {
        const { id, name, image } = element.show;
        let count = 0;
        loveData.forEach((element) => {
          if (element.item_id === id) {
            console.log('find it');
            count = element.likes;
          }
        });
        const container = `
                    <div class="items">
                      <img src="${image.original}" alt="#" />
                      <h2>${name}</h2>
                      <div class="likes_love">
                        <span>Likes: ${count}</span>
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
    const mainElement = document.querySelector('.display-items');
    mainElement.innerHTML = commentPopup;
    this.handleCancleClick();
  }

  handleLikes = () => {
    const love = document.querySelectorAll('.love');
    love.forEach((element) => {
      element.addEventListener('click', (event) => {
        console.log('hello', event.target.getAttribute('id'));
        tvShowApi.sendData(event.target.getAttribute('id'));
      });
    });
  }
}

const eventhandler = new EventsHandler();
export default eventhandler;
