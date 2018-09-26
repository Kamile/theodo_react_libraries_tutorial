import React from "react";
import styled from "styled-components";

import PageTemplate from "./templates/PageTemplate";

import TextBlock from "../components/TextComponent";
import CodeBlock from "../components/CodeBlock";

const ArticleTitle = styled.h2`
  text-align: center;
  margin-top: 20px;
`;

const BlueBlock = styled.div`
  height: 100px;
  width: 100px;
  background-color: #acf;
  float: left;
  margin: 5px;
`;

const RedBlock = styled(BlueBlock)`
  background-color: #f87;
`;

const GreenBlock = styled(BlueBlock)`
  background-color: #afa;
`;

class StyledComponentPage extends React.PureComponent {
  render() {
    return (
      <PageTemplate>
        <ArticleTitle>Styled Components</ArticleTitle>
        <TextBlock>
          Styled-components enable you to use actual CSS in your React
          components. Styled components define tagged template literals to style
          components that can be directly rendered. Styles can be extended from
          HTML elements (div, h1, section etc) or can be extended from
          already-defined styled components using
        </TextBlock>
        <CodeBlock>styled([ComponentName])</CodeBlock>
        <TextBlock>
          Read more about styled components{" "}
          <a href="https://www.styled-components.com/docs/advanced">here</a>.
        </TextBlock>
        <RedBlock />
        <GreenBlock />
        <BlueBlock />
        <TextBlock>
          Here are three blocks defined by styled components. The red and green
          blocks are extended from the style defined for the blue block. Only
          the colour changes - less redundant code :-)
        </TextBlock>
      </PageTemplate>
    );
  }
}

export default StyledComponentPage;
