import uuid from 'uuid';

  const initialCommentState = {
    comments: [
      { text: 'Dummy Content 1', id: uuid() },
      { text: 'Dummy Content 2', id: uuid() },
    ]
  }
  
  const comments = (state = initialCommentState, action) => {
    switch (action.type) {
      case 'ADD_COMMENT':
          const newComment = {text: action.commentText, id: uuid()}
          return {
            ...state, 
            comments: [...state.comments, newComment]
          };
      default:
        return state;
    }
  }
  
  export default comments;
  