import React from "react";
import PageTemplate from "./templates/PageTemplate";

class CommentsPage extends React.PureComponent {
    render() {
      return (
        <PageTemplate>
            <h2>Comments</h2>
            <input type="textarea"/>
            <button>Submit</button>
        </PageTemplate>
      );
    }
}

export default CommentsPage