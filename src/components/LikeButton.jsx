import React from "react";
import { connect } from "react-redux";
import { incrementCounter } from "../redux/counter.actions";

class LikeButton extends React.PureComponent {
  render() {
    return <button onClick={this.props.incrementCounter}>Like!</button>;
  }
}

const mapDispatchToProps = {
  incrementCounter
};

const LikeButtonWrapper = connect(
  undefined,
  mapDispatchToProps
)(LikeButton);

export default LikeButtonWrapper;
