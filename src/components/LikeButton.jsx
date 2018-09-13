import React from "react";
import { connect } from "react-redux";
import { incrementCounter, asyncIncrementCounter } from "../redux/counter.actions";

// class LikeButton extends React.PureComponent {
//   render() {
//     return <button onClick={this.props.incrementCounter}>Like!</button>;
//   }
// }

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
