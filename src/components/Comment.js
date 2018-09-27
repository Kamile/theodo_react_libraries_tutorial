import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextComponent from "./TextComponent";

import { getComments } from "../actions/comments";

const CommentBlock = styled(TextComponent)`
  padding: 20px;
  background-color: #eee;
`;

const LikeBlock = styled.div`
  float: right;
`;

const Comment = ({ onClick, text, numLikes }) => (
  <div>
    <CommentBlock onClick={onClick}>{text}</CommentBlock>
    <LikeBlock>{numLikes} likes </LikeBlock>
  </div>
);

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  numLikes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Comment;
