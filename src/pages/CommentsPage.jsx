import React from "react";
import PageTemplate from "./templates/PageTemplate";
import AddComment from "../containers/AddComment";
import VisibleCommentsList from "../containers/VisibleCommentsList";

class CommentsPage extends React.PureComponent {
  render() {
    return (
      <PageTemplate>
        <AddComment />
        <VisibleCommentsList />
      </PageTemplate>
    );
  }
}

export default CommentsPage;
