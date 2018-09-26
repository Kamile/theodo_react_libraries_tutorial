import React from "react";
import { connect } from "react-redux";

import { getValue } from "../redux/counter.actions";
import { selectValue } from "../redux/counter.selectors";

class LikeDisplay extends React.PureComponent {
  componentDidMount() {
    this.props.getValue();
  }
  render() {
    return <div>{this.props.value} likes.</div>;
  }
}

const mapStateToProps = state => ({
  value: selectValue(state)
});

const mapDispatchToProps = dispatch => ({
  getValue: () => dispatch(getValue())
});

const LikeDisplayWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeDisplay);

export default LikeDisplayWrapper;
