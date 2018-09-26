import React from "react";

import TextBlock from "../components/TextComponent";
import PageTemplate from "./templates/PageTemplate";
import CodeBlock from "../components/CodeBlock";

class ReactRouterPage extends React.PureComponent {
  render() {
    return (
      <PageTemplate>
        <h2>React Router DOM</h2>
        <TextBlock>
          React Router is an API that allows us to define dynamics routes, where
          routing takes place as the app is rendering. In a React Router,
          everything is a component. In the <CodeBlock>AppRouter</CodeBlock>,
          define the Routes with the <CodeBlock>path</CodeBlock> as appended to
          the URL together with the <CodeBlock>component</CodeBlock> that should
          be rendered. The API provides components such as{" "}
          <CodeBlock>NavLink</CodeBlock> and <CodeBlock>Link</CodeBlock> that
          then allow the path to be defined using <CodeBlock>to</CodeBlock>.
          Read more about React Router in the{" "}
          <a href="https://reacttraining.com/react-router/web/guides/philosophy">
            documentation
          </a>
          .
        </TextBlock>
      </PageTemplate>
    );
  }
}

export default ReactRouterPage;
