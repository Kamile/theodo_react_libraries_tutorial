import React from "react";
import PageTemplate from "./templates/PageTemplate";
import uuid from 'uuid';

class CommentsPage extends React.PureComponent {
    state = {
        comments: [
            { text: 'Dummy Content 1', id: uuid() },
            { text: 'Dummy Content 2', id: uuid() },
        ],
        commentText: ''
    }
    onCommentSubmit = (e) => {
        const commentText = this.state.commentText;
        this.setState(state => (
            {
             comments: [...this.state.comments, { text: commentText, id: uuid()}]
            }))
        this.setState(state => ({ commentText: '' }))
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState(state => ({ commentText: value }))
    }
    render() {
      return (
        <PageTemplate>
            <h2>Comments</h2>
            <input 
                type="text" 
                value={this.state.commentText} 
                onChange={this.handleChange}
            />
            <button onClick={this.onCommentSubmit}>Submit</button>
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
