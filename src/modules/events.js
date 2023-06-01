import tvShowApi from './api.js';
import '../style.css';
import love from '../assets/love.png';
import updateLikeCount from './update-like.js';

class EventsHandler {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/'; // Add the API base URL
  }

  // Function to fetch item likes from the Involvement API
  fetchItemLikes = async (appId, itemId) => {
    try {
      const response = await fetch(`${this.url}apps/${appId}/likes`); // Use the correct URL format
      const likesData = await response.json();
      const itemLikes = likesData.find((item) => item.item_id === itemId);
      return itemLikes ? itemLikes.likes : 0;
    } catch (error) {
      console.error('Error fetching item likes:', error);
      return 0;
    }
  };

  // This function will load the default page
  onPageLoad = async () => {
    const mainElement = document.querySelector('.display-items');
    const data = await tvShowApi.gettingData();
    const appId = 'jDmx1fPvHr5KpfZ0L9Bv'; // Replace with your actual app ID

    try {
      data.forEach(async (element) => {
        if (element.show.image.original !== null) {
          const { id, name, image } = element.show;
          const count = await this.fetchItemLikes(appId, id);
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
          this.handleLikes(appId, id); // Call handleLikes for each item
        }
      });

      this.handleCommentBtnClick();
      return 1;
    } catch (error) {
      console.error('Error loading the default page:', error);
      return error;
    }
  };

  handleLikes = async (appId, id) => {
    const loveButton = document.querySelector(`#love-${id}`);
    loveButton.addEventListener('click', async () => {
      try {
        // Retrieve the current like count for the item
        const count = await this.fetchItemLikes(appId, id);

        // Increment the like count by 1
        const updatedCount = count + 1;
        const updateURL = `${this.url}apps/${appId}/likes`;

        // Update the like count in the API
        updateLikeCount(id, updatedCount, updateURL);

        // Update the UI or perform other actions with the updated like count
        console.log(`Updated like count for item ${id}: ${updatedCount}`);

        // Update the displayed like count
        const likesSpan = document.querySelector(`#love-${id} ~ span`);
        likesSpan.textContent = `Likes: ${updatedCount}`;
      } catch (error) {
        console.error('Error handling like count:', error);
      }
    });
  };

  // Function to handle comment button click
  handleCommentBtnClick = () => {
    // Add your code to handle the comment button click event
  };
}

const eventhandler = new EventsHandler();
export default eventhandler;
