class Count {
  countLove = (event) => {
    const currentCount = parseInt(
      event.target.closest('.likes_love').querySelector('.innerSpan')
        .textContent,
      10,
    );
    const countContainer = event.target
      .closest('.likes_love')
      .querySelector('.innerSpan');
    const newCounter = currentCount + 1;
    countContainer.innerHTML = newCounter;
  };

  countItems = () => {
    const itemsCount = document.querySelectorAll('.items').length;
    return itemsCount;
  };
}

const counter = new Count();
export default counter;
