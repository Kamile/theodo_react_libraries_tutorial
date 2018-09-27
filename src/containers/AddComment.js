import React from "react";
import { connect } from "react-redux";
import { addComment } from "../actions/comments";

const AddComment = ({ dispatch }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addComment(input.value));
        input.value = "";
      }}
    >
      <input ref={node => (input = node)} />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default connect()(AddComment);
