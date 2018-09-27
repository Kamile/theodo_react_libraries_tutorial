import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

const CommentList = ({ comments, likeComment }) => (
  <div>
    {comments.map(comment => (
      <Comment
        key={comment.id}
        {...comment}
        onClick={() => likeComment(comment.id)}
      />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      numLikes: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  likeComment: PropTypes.func.isRequired
};

export default CommentList;
