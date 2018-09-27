import React from "react";
import { connect } from "react-redux";
import { asyncIncrementCounter } from "../actions/counter";

class LikeButton extends React.PureComponent {
  render() {
    return <button onClick={this.props.asyncIncrementCounter}>Like!</button>;
  }
}

const mapDispatchToProps = {
  asyncIncrementCounter
};

const LikeButtonWrapper = connect(
  undefined,
  mapDispatchToProps
)(LikeButton);

export default LikeButtonWrapper;
