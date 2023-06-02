class LoveCounter {
    countLove = (event) => {
      const currentCount = parseInt(event.target.closest('.likes_love').querySelector('.innerSpan').textContent, 10);
      const countContainer = event.target.closest('.likes_love').querySelector('.innerSpan');
      const newCounter = currentCount + 1;
      countContainer.innerHTML = newCounter;
    }
}

const loveCounter = new LoveCounter();
export default loveCounter;
