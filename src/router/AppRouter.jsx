import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import ReactRouterPage from "../pages/ReactRouterPage";
import ReduxPage from "../pages/ReduxPage";
import SagaAxiosPage from "../pages/SagaAxiosPage";
import IntroPage from "../pages/IntroPage";
import StyledComponentPage from "../pages/StyledComponentPage";
import CommentsPage from "../pages/CommentsPage";

class Page extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={IntroPage} />
          <Route path="/reactrouter" component={ReactRouterPage} />
          <Route path="/redux" component={ReduxPage} />
          <Route path="/sagaaxios" component={SagaAxiosPage} />
          <Route path="/styledcomponents" component={StyledComponentPage} />
          <Route path="/comments" component={CommentsPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Page;
