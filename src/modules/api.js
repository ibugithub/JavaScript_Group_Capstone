class SendAndReciveData {
  constructor() {
    this.url = 'https://api.tvmaze.com/schedule';
    this.involbeurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.appId = 'jDmx1fPvHr5KpfZ0L9Bv';
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
    fetchItemLikes = async () => {
      try {
        const response = await fetch(`${this.involbeurl}apps/${this.appId}/likes`); // Use the correct URL format
        const likesData = await response.json();
        return likesData;
      } catch (error) {
        console.error('Error fetching item likes:', error);
        return 0;
      }
    };
}

const tvShowApi = new SendAndReciveData();
export default tvShowApi;
