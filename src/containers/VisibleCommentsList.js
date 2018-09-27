import { connect } from "react-redux";
import CommentList from "../components/CommentList";

// TODO: add another property to state for no of likes and add visibility filter
const getVisibleComments = comments => {
  return comments;
};

const mapStateToProps = state => ({
  comments: getVisibleComments(state.comments)
});

export default connect(
  mapStateToProps,
  undefined
)(CommentList);
