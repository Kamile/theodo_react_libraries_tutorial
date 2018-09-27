let nextCommentId = 0;
export const addComment = text => ({
  type: "ADD_COMMENT",
  id: nextCommentId++,
  text
});
