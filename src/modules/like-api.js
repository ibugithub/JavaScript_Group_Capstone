class Likes {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  }

  gettingData = async () => {
    try {
      const response = await fetch(this.url);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      return error;
    }
  };

  sendData = async (count, itemId) => {
    const appId = 'jDmx1fPvHr5KpfZ0L9Bv';
    const data = {
      item_id: itemId, // Use "item_id" key
      likes: count, // Use "likes" key
    };

    try {
      const response = await fetch(`${this.url}${appId}/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to post data. Server responded with status ${response.status}`
        );
      }
      console.log('Data posted successfully');
    } catch (error) {
      console.error('Error posting data:', error);
      // Rethrow the error or handle it in the calling code
      throw error;
    }
  };
}

const getlikes = new Likes();
export default getlikes;
