import React from "react";

import PageTemplate from "./templates/PageTemplate";
import TextBlock from "../components/TextComponent";
import LikeButton from "../components/LikeButton";
import LikeDisplay from "../components/LikeDisplay";

class ReduxPage extends React.PureComponent {
  render() {
    return (
      <PageTemplate>
        <h2>Redux</h2>
        <h4>
          Redux - Use actions and reducers manage global states and events.
        </h4>
        <TextBlock>
          Redux imposes restrictions on how and when updates can happen to try
          to make state mutations predictable.
        </TextBlock>
        <TextBlock>
          An object is defined without setters to prevent arbitrary changes.
        </TextBlock>
        <TextBlock>
          An action is needed to change something in the state.
        </TextBlock>
        <TextBlock>
          A function called a <em>reducer</em> is used to tie state and actions
          together. It takes state and action and returns the next state. There
          are 3 principles:
        </TextBlock>
        <ul>
          <li>All state is stored in an object tree in a single store.</li>
          <li>
            State is read-only - use actions (objects) to describe what
            happened. Actions are serialised and centralised, allowing for easy
            logging and debugging.
          </li>
          <li>
            Use pure reducers to specify how actions transform state tree.
            Return new state objects instead of mutating the previous state.
          </li>
        </ul>
        <TextBlock>Here the action is increment.</TextBlock>
        <LikeButton />
        <LikeDisplay />
      </PageTemplate>
    );
  }
}

export default ReduxPage;
