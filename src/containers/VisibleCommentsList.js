import { connect } from "react-redux";
import { likeComment } from "../actions/comments";
import CommentList from "../components/CommentList";

const getVisibleComments = comments => {
  return comments;
};

const mapStateToProps = state => ({
  comments: getVisibleComments(state.comments)
});

const mapDispatchToProps = dispatch => ({
  likeComment: id => dispatch(likeComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
