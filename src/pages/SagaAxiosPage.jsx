import React from "react";

import PageTemplate from "./templates/PageTemplate";

import LikeButton from "../components/LikeButton";
import LikeDisplayWithSaga from "../components/LikeDisplayWithSaga";
import TextBlock from "../components/TextComponent";

class SagaAxiosPage extends React.PureComponent {
  render() {
    return (
      <PageTemplate>
        <h2>Redux Saga and Axios</h2>
        <TextBlock>
          Redux Sagas - side effects for your redux actions managed by a single
          thread.
        </TextBlock>
        <LikeButton />
        <TextBlock>Axios - HTTPS requests made easy.</TextBlock>
        <LikeButton />
        <LikeDisplayWithSaga />
      </PageTemplate>
    );
  }
}

export default SagaAxiosPage;
