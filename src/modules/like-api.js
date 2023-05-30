class Likes {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
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

const getlikes = new Likes();
export default getlikes;
