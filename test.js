/*eslint-disable*/
const getAppId = () => {
  const baseUrl =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
  const endpoint = '/apps/';

  fetch(baseUrl + endpoint, {
    method: 'POST',
  })
    .then((response) => response.text())
    .then((appId) => {
      console.log('Created app with ID:', appId);
    });
};

const postData = () => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jDmx1fPvHr5KpfZ0L9Bv/likes',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: 9311 }),
    }
  ).then((response) => console.log(response));
};

const getData = () => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jDmx1fPvHr5KpfZ0L9Bv/likes'
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

// getAppId();
// postData();
getData();
