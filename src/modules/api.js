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

  sendScore = async (name, userScore) => {
    const data = { user: name, score: userScore };
    await fetch(this.url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
  };
}

const tvShowApi = new SendAndReciveData();
export default tvShowApi;