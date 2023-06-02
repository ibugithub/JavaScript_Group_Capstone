import tvShowApi from './modules/api.js';
import commentCounter from './modules/commentCounter.js';

jest.mock('./modules/api.js', () => ({
  getCommentData: jest.fn(),
}));

describe('CommentCounter', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('count the total comments for a given id', async () => {
    const mockResponse = [
      { commentId: 1, comment: 'first comment' },
      { commentId: 2, comment: 'second comment' },
      { commentId: 3, comment: 'third comment' },
    ];
    tvShowApi.getCommentData.mockResolvedValue(mockResponse);

    const id = 123;
    const totalComments = await commentCounter.countComment(id);

    expect(tvShowApi.getCommentData).toHaveBeenCalledWith(id);
    expect(totalComments).toBe(3);
  });
});
