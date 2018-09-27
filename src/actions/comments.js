let nextCommentId = 0;

export const types = {
  GET: {
    REQUEST: "GET.REQUEST",
    FAILURE: "GET.FAILURE",
    SUCCESS: "GET.SUCCESS"
  },
  ASYNC_ADD_COMMENT: {
    SUCCESS: "ASYNC_ADD_COMMENT.SUCCESS",
    FAILURE: "ASYNC_ADD_COMMENT.FAILURE",
    REQUEST: "ASYNC_ADD_COMMENT.REQUEST"
  }
};

export const addComment = text => ({
  type: "ADD_COMMENT",
  id: nextCommentId++,
  numLikes: 0,
  text
});

export const likeComment = id => ({
  type: "LIKE_COMMENT",
  id
});

export const unlikeComment = id => ({
  type: "UNLIKE_COMMENT",
  id
});

export const getComments = () => ({
  type: types.GET.REQUEST
});

export const getCommentsSuccess = comments => ({
  type: types.GET.SUCCESS,
  comments
});

export const addCommentSuccess = comments => ({
  type: types.ASYNC_ADD_COMMENT.SUCCESS,
  comments
});
