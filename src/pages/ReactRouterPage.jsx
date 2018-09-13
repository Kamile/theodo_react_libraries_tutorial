import React from "react";

import LikeComponent from "../components/LikeComponent";
import PageTemplate from "./templates/PageTemplate";

class ReactRouterPage extends React.PureComponent {
  render() {
    return (
      <PageTemplate>
        <h2>React Router Dom</h2>
        <a
          href="https://reacttraining.com/react-router/web/guides/philosophy"
          target="_blank"
        >
          Docs
        </a>
        <p>
          Redux Sagas - side effects for your redux actions. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Reprehenderit nam porro aliquid
          tenetur quasi. Recusandae similique quae quo quibusdam dignissimos
          magnam, nesciunt inventore culpa sequi blanditiis dolor temporibus ex
          nobis!
        </p>
        <p>
          Axios - https requests made easy. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Nostrum delectus libero maiores,
          quibusdam nam nulla ullam odio ab quod recusandae incidunt expedita
          doloremque nobis natus eaque in impedit optio officia.
        </p>
        <p>
          Styled-components - ACTUAL css in your react components. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Non modi similique iusto
          dolor repellendus ipsam quis ad, inventore officia doloremque. Magnam
          a veniam at debitis neque autem veritatis laborum? Rem.
        </p>
        <LikeComponent />
      </PageTemplate>
    );
  }
}

export default ReactRouterPage;
