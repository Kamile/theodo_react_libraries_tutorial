import React from "react";
import PageTemplate from "./templates/PageTemplate";
import { connect } from "react-redux";
import addComment from '../redux/comments.actions';

class CommentsPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            commentText: ''
        };
    }
    onCommentSubmit = (e) => {
        const commentText = this.state.commentText;
        this.props.addComment(commentText);
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
                {this.props.comments.map((comment) => {
                    return  <li key={comment.id}>{comment.text}</li>;
                })}
            </ul>
        </PageTemplate>
      );
    }
}

const mapStateToProps = (state) => ({
    comments: state.commentStore.comments
})
const mapDispatchToProps = (dispatch) => ({
    addComment: (commentText) => dispatch(addComment(commentText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage)
