export const countLove = (event) => {
  const currentCount = parseInt(
    event.target.closest('.likes_love').querySelector('.innerSpan').textContent,
    10,
  );
  console.log('The current count is', currentCount);
  const countContainer = event.target
    .closest('.likes_love')
    .querySelector('.innerSpan');
  const newCounter = currentCount + 1;
  countContainer.innerHTML = newCounter.toString();
};

export const countItems = () => {
  const itemsCount = document.querySelectorAll('.items').length;
  return itemsCount;
};
