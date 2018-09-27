const comments = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          numLikes: 0
        }
      ];
    case "LIKE_COMMENT":
      console.log("Liking comment with id" + action.id);
      console.log(state);
      return state.map(
        comment =>
          comment.id === action.id
            ? { ...comment, numLikes: comment.numLikes + 1 }
            : comment
      );
    default:
      return state;
  }
};

export default comments;
