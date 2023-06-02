import eventhandler from './modules/events.js';

eventhandler.onPageLoad();

// const onPageLoad = () => {
//   async function postData(url = '') {
//     const response = await fetch(url);
//     return response.json();
//   }
//   postData('https://api.tvmaze.com/schedule').then((data) => console.log('the show data is', data));

//   async function postData2(url2 = '') {
//     const response = await fetch(url2);
//     return response.json();
//   }
//   postData2('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jDmx1fPvHr5KpfZ0L9Bv/likes').then((data) => console.log('the love data is', data));

//   // const data = tvShowApi.gettingData();
//   // const loveData = tvShowApi.fetchItemLikes();
//   // this.loadHome(data, loveData);
//   // this.handleCommentBtnClick();
//   // this.handleLikes();
// };

// onPageLoad();