import React from "react";
import PageTemplate from "./templates/PageTemplate";
import { Link } from "react-router-dom";

class IntroPage extends React.PureComponent {
  render() {
    return (
      <PageTemplate>
        <h2>Introduction</h2>
        <h3>Why?</h3>
        <p>
          I've been tracking the progress of our onboarding for some of our new
          devs for a few months, and the prevailing pain point is external
          libraries and how they fit together to make an application. So, I
          thought I'd make the simplest one I could think of as a reference for
          them using the five libraries I use most in my side and professional
          projects:
        </p>
        <ul>
          <li>React Router</li>
          <li>Redux</li>
          <li>Redux Saga</li>
          <li>Axios</li>
          <li>Styled Components</li>
        </ul>
        <p>The feature built will be a 'like' feature for a number of posts.</p>
        <p>The first thing to do is set up routes using ReactRouter.</p>
        <Link to="/reactrouter">click here</Link> to move on the the ReactRouter
        article.
      </PageTemplate>
    );
  }
}

export default IntroPage;
