import React from "react";
import PageTemplate from "./templates/PageTemplate";
import { Link } from "react-router-dom";
import TextBlock from "../components/TextComponent";

class IntroPage extends React.PureComponent {
  render() {
    return (
      <PageTemplate>
        <h2>Introduction</h2>
        <h3>Why?</h3>
        <TextBlock>
          I've been tracking the progress of our onboarding for some of our new
          devs for a few months, and the prevailing pain point is external
          libraries and how they fit together to make an application. So, I
          thought I'd make the simplest one I could think of as a reference for
          them using the five libraries I use most in my side and professional
          projects:
        </TextBlock>
        <ul>
          <li>React Router</li>
          <li>Redux</li>
          <li>Redux Saga</li>
          <li>Axios</li>
          <li>Styled Components</li>
        </ul>
        <TextBlock>
          The feature built will be a 'like' feature for a number of posts.
        </TextBlock>
        <TextBlock>
          The first thing to do is set up routes using{" "}
          <Link to="/reactrouter">ReactRouter</Link>.
        </TextBlock>
      </PageTemplate>
    );
  }
}

export default IntroPage;
