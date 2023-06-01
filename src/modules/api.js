class SendAndReciveData {
  constructor() {
    this.url = 'https://api.tvmaze.com/schedule';
    this.inovateUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
  }

  gettingData = async () => {
    try {
      const response = await fetch(this.url);
      const jsonData = await response.json();
      return jsonData;
    } catch (errror) {
      return errror;
    }
  };

    // Function to fetch item likes from the Involvement API
    fetchItemLikes = async (appId, itemId) => {
      try {
        const response = await fetch(`${this.inovateUrl}apps/${appId}/likes`);
        const likesData = await response.json();
        const itemLikes = likesData.find((item) => item.item_id === itemId);
        return itemLikes ? itemLikes.likes : 0;
      } catch (error) {
        console.error('Error fetching item likes:', error);
        return 0;
      }
    };
}

const tvShowApi = new SendAndReciveData();
export default tvShowApi;
