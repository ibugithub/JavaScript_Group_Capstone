import tvShowApi from './api.js';

class CommentCounter {
    countComment = async (id) => {
      const totalComments = tvShowApi.getCommentData(id);
      return totalComments.then((response) => {
        let counter = 0;
        response.forEach(() => {
          counter += 1;
        });
        return counter;
      });
    }
}
const commentCounter = new CommentCounter();
export default commentCounter;