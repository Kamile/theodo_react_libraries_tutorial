import React from "react";
import { connect } from "react-redux";

import { selectValue } from "../redux/counter.selectors";

class LikeDisplay extends React.PureComponent {
  render() {
    return <div>{this.props.value} likes.</div>;
  }
}

const mapStateToProps = state => ({
  value: selectValue(state)
});

const LikeDisplayWrapper = connect(mapStateToProps)(LikeDisplay);

export default LikeDisplayWrapper;
