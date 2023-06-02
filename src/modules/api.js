class SendAndReciveData {
  constructor() {
    this.url = 'https://api.tvmaze.com/schedule';
  }

  gettingData = async () => {
    try {
      const response = await fetch(this.url);
      const jsonData = await response.json();
      return jsonData;
    } catch (errror) {
      return errror;
    }
  }
}

const tvShowApi = new SendAndReciveData();
export default tvShowApi;