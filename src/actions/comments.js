let nextCommentId = 0;
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
