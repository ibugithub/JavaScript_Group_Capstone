import tvShowApi from './api.js';

class Count {
  countLove = (event, id) => {
    console.log('start form here'); //   console.log(event.target.closest('.likes_love').querySelector('span').getAttribute('count'));
    //   console.log(event.target.closest('.likes_love').querySelector('.innerSpan'));
    const countContainer = event.target
      .closest('.likes_love')
      .querySelector('.innerSpan'); //   const currentCount = event.target.closest('.likes_love').querySelector('span').getAttribute('count');
    //   const newCounter = parseInt(currentCount, 10) + 1;
    //   countContainer.innerHTML = newCounter;
    id = parseInt(id, 10);
    const loveData = tvShowApi.getLoveData();
    console.log('inside the counter');
    loveData.then((data) => {
      data.forEach((element) => {
        //   console.log('the id is', id);
        //   console.log('the element id is', element.item_id);
        //   console.log('the likes is', element.likes);
        console.log('--------------');
        if (id === element.item_id) {
          console.log('the id is', id);
          console.log('the element id is', element.item_id);
          console.log('the likes is', element.likes);
          countContainer.textContent = element.likes + 1;
        }
      });
    });
  };
}

const count = new Count();
export default count;
