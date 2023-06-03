const { countLove, countItems } = require('./functions.js');

describe('countLove', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="likes_love">
        <span class="innerSpan">0</span>
      </div>
    `;
  });

  test('increments the like count correctly', () => {
    const countContainer = document.createElement('span');
    countContainer.textContent = '0';
    countContainer.classList.add('innerSpan');

    const likesLoveContainer = document.createElement('div');
    likesLoveContainer.classList.add('likes_love');
    likesLoveContainer.appendChild(countContainer);

    document.body.appendChild(likesLoveContainer);

    const event = {
      target: {
        closest: () => likesLoveContainer,
      },
    };

    countLove(event);

    expect(countContainer.innerHTML).toBe('1');
  });
});

describe('countItems', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="items"></div>
      <div class="items"></div>
      <div class="items"></div>
    `;
  });

  test('returns the correct number of items', () => {
    const itemsCount = countItems();

    expect(itemsCount).toBe(3);
  });
});
