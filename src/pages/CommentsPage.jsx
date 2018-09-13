import React from "react";
import PageTemplate from "./templates/PageTemplate";
import uuid from 'uuid';

class CommentsPage extends React.PureComponent {
    state = {
        comments: [
            { text: 'Dummy Content 1', id: uuid() },
            { text: 'Dummy Content 2', id: uuid() },
        ]
    }
    render() {
      return (
        <PageTemplate>
            <h2>Comments</h2>
            <input type="textarea"/>
            <button>Submit</button>
            <ul>
                {this.state.comments.map((comment) => {
                    return  <li key={comment.id}>{comment.text}</li>;
                })}
            </ul>
        </PageTemplate>
      );
    }
}
export default CommentsPage
