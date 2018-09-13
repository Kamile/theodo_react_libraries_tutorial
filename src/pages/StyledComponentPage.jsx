import React from "react";
import styled from "styled-components";

import PageTemplate from "./templates/PageTemplate";

import LikeButton from "../components/LikeButton";
import LikeDisplayWithSaga from "../components/LikeDisplayWithSaga";

const ArticleTitle = styled.h2`
  text-align: center;
  margin-top: 20px;
`;

const ArticleParagraph = styled.div`
  margin: auto;
  margin-top: 10px;
  width: 800px;
`;

class StyledComponentPage extends React.PureComponent {
  render() {
    return (
      <PageTemplate>
        <ArticleTitle>Styled Components</ArticleTitle>
        <ArticleParagraph>
          <p>
            Redux - Use actions and reducers manage global states and events!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad qui id,
            fuga, natus architecto cupiditate similique enim exercitationem
            aliquam dolores labore voluptate quia provident voluptas corrupti
            est ullam perspiciatis rerum.
          </p>
          <LikeButton />
        </ArticleParagraph>
        <ArticleParagraph>
          <p>
            Redux Sagas - side effects for your redux actions. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Reprehenderit nam porro
            aliquid tenetur quasi. Recusandae similique quae quo quibusdam
            dignissimos magnam, nesciunt inventore culpa sequi blanditiis dolor
            temporibus ex nobis!
          </p>
          <LikeButton />
        </ArticleParagraph>
        <ArticleParagraph>
          <p>
            Axios - https requests made easy. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nostrum delectus libero maiores,
            quibusdam nam nulla ullam odio ab quod recusandae incidunt expedita
            doloremque nobis natus eaque in impedit optio officia.
          </p>
          <LikeButton />
        </ArticleParagraph>
        <ArticleParagraph>
          <p>
            Styled-components - ACTUAL css in your react components. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Non modi similique
            iusto dolor repellendus ipsam quis ad, inventore officia doloremque.
            Magnam a veniam at debitis neque autem veritatis laborum? Rem.
          </p>
          <LikeButton />
        </ArticleParagraph>
        <LikeDisplayWithSaga />
      </PageTemplate>
    );
  }
}

export default StyledComponentPage;
