import React from "react";

class LikeComponent extends React.PureComponent {
  state = {
    likes: 0
  };

  incrementLike = () => {
    const likes = this.state.likes + 1;
    this.setState({ likes });
  };

  decrementLike = () => {
    const likes = this.state.likes - 1;
    this.setState({ likes });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementLike}>Click to like</button>
        <button onClick={this.decrementLike}>Click to dislike</button>
        <div>{this.state.likes} likes</div>
      </div>
    );
  }
}

export default LikeComponent;
