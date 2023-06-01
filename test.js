// // class SendAndReciveData {
// //   constructor() {
// //     this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
// //   }

// //     gettingData = async () => {
// //       const response = await fetch(this.url);
// //       const jsonData = await response.json();
// //       return jsonData;
// //     }

// //     sendScore = async (name, userScore) => {
// //       const data = { user: name, score: userScore };
// //       await fetch(this.url, {
// //         method: 'POST',
// //         mode: 'cors',
// //         cache: 'no-cache',
// //         credentials: 'same-origin',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         redirect: 'follow',
// //         referrerPolicy: 'no-referrer',
// //         body: JSON.stringify(data),
// //       });
// //     };
// // }

// const api = async () => {
//   fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0R3ry3Cxsg0WOw831pSH/likes', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({ item_id: 2343 }),
//   }).then((response) => response.json())
//     .then((data) => {
//       // Handle the response data
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log('Error:', error);
//     });
// };

// async function postData(url) {
//   const response = await fetch(url, {
//     method: 'POST',
//     mode: 'cors',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     redirect: 'follow',
//     referrerPolicy: 'no-referrer',
//     body: JSON.stringify({
//       user: 'John Doe',
//       score: 42,
//     }),
//   });
//   const result = await response.json();
//   console.log(result);
//   return result;
// }

// const gettingData = async (url) => {
//   const response = await fetch(url);
//   console.log(response);
//   const jsonData = await response.json();
//   console.log(jsonData);
//   return jsonData;
// };

// api();

// // postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/');
// // gettingData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qmz2QtEE31bWM2CULEle/scores/');

// // postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qmz2QtEE31bWM2CULEle/scores/');
// // gettingData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qmz2QtEE31bWM2CULEle/scores/');
// const getAppId = () => {
//   const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
//   const endpoint = '/apps/';

//   fetch(baseUrl + endpoint, {
//     method: 'POST',
//   })
//     .then((response) => response.text())
//     .then((appId) => {
//       // Handle the response data (app ID)
//       console.log('Created app with ID:', appId);
//     })
//     .catch((error) => {
//       console.log('Error:', error);
//     });
// };

// const postData = () => {
//   const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
//   const appId = 't5pYQSukpNYpAGqZxZXN';
//   const endpoint = `/apps/${appId}/likes/`;

//   fetch(baseUrl + endpoint, {
//     method: 'POST',
//     body: JSON.stringify(23432),
//   })
//     .then((response) => {
//       if (response.status === 201) {
//         console.log('Like created successfully');
//       } else {
//         console.log(response);
//         console.log('Failed to create like');
//       }
//     })
//     .catch((error) => {
//       console.log('Error:', error);
//     });
// };

// const getData = () => {
//   const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
//   const appId = 't5pYQSukpNYpAGqZxZXN';
//   const endpoint = `/apps/${appId}/likes/`;

//   fetch(baseUrl + endpoint)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log('Likes:', data);
//     })
//     .catch((error) => {
//       console.log('Error:', error);
//     });
// };

const getAppId = () => {
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
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
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8aJJHjREhkiUS364eaIG/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: 32433 }),
  })
    .then((response) => console.log(response));
};

const getData = () => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8aJJHjREhkiUS364eaIG/likes')
    .then((response) => response.json())
    .then((data) => console.log(data));
};

getAppId();
// postData();
// getData();