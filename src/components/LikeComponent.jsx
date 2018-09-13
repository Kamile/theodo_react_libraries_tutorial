import React from "react";

class LikeComponent extends React.PureComponent {
  state = {
    likes: 0
  };

  incrementLike = () => {
    const likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementLike}>Click to Like!</button>
        <div>{this.state.likes} likes</div>
      </div>
    );
  }
}

export default LikeComponent;
