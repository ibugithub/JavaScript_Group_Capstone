class SendAndReciveData {
  constructor() {
    this.url = 'https://api.tvmaze.com/schedule';
    this.involbeurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.appId = 'UFl3TzBZ7UUa77NKxu0f';
  }

  getShowData = async () => {
    try {
      const response = await fetch(this.url);
      const jsonData = await response.json();
      return jsonData;
    } catch (errror) {
      return errror;
    }
  };

  getLoveData = async () => {
    try {
      const response = await fetch(`${this.involbeurl}apps/${this.appId}/likes`);
      const likesData = await response.json();
      return likesData;
    } catch (error) {
      return error;
    }
  };

  sendLoveData = (id) => {
    id = parseInt(id, 10);
    fetch(`${this.involbeurl}apps/${this.appId}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: id }),
    });
  };
}

const tvShowApi = new SendAndReciveData();
export default tvShowApi;
