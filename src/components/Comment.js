import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextComponent from "./TextComponent";

const CommentBlock = styled(TextComponent)`
  padding: 20px;
  background-color: #eee;
`;

const Comment = ({ onClick, text, numLikes }) => (
  <CommentBlock onClick={onClick}>
    {text} --- {numLikes} likes.
  </CommentBlock>
);

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  numLikes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Comment;
