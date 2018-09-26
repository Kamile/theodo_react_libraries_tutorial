# All you need to develop your first full stack Node React project

## Why I wrote this article / Aim (i.e what you're going to get out of it and why it's important)

This article was written to help onboard our new developers to the React libraries we use the most. By the end of this article you should have all you need to be able to add a new page, and add a new feature including styling and a call to a backend (Node in this case).

I've written a short app here **https://github.com/TomOConnor95/theodo_react_libraries_tutorial**. You can clone it here to have a look at it as you go through the article **git@github.com:TomOConnor95/theodo_react_libraries_tutorial.git** or follow along without it.

Before you start you should be familiar with React. I suggest https://reactjs.org/tutorial/tutorial.html tutorial - i am not teaching you react, sorry!

The libraries we will be having a look at are:

- styled-components
- react-router
- react-redux
- redux-saga and axios
- Node Express backend

To set up the project:

`git clone [repo]`

`yarn install`

`node server.js // to start the server`

`yarn start // to start the web app`

## 1. Styling your app with styled-components

This is my favourite way of styling React components. We'll start with taking a look at the Header component:

```JSX
import styled from 'styled-components'

const Header = styled.div`
  background: #feffff;
  border-bottom: thin solid #17252a;
  width: 100%;
  padding: 16px;
  h1 {
    font-size: 24px;
  }
`;
```

Then you can use `Header` in the JSX of your React components:

```JSX
class PageTemplate extends React.PureComponent {
  render() {
    return (
      <PageCont>
        <Header>
          <h1>Full React App With 5 Libraries</h1>
        </Header>
        ...
      </PageCont>
    );
  }
}
```

If you import a component and want to style it:

```JSX
import { NavLink } from "react-router-dom";

const SidebarNavLink = styled(NavLink)`
  transition-duration: 1s;
  padding: 8px;
  color: #17252a;
  text-decoration: none;
  &.active {
    padding-left: 24px;
  }
  &:hover {
    padding-left: 24px;
  }
`;
```

Docs: https://www.styled-components.com/docs

Source code: https://github.com/styled-components/styled-components

## 2. React Router

This is a really simple libary that conditionally renders components based on the url:

```JSX
import { Route, BrowserRouter, Switch } from "react-router-dom";

class Page extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={IntroPage} />
          <Route path="/reactrouter" component={ReactRouterPage} />
          <Route path="/redux" component={ReduxPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
```

and Links or NavLinks to navigate between them with the `to` prop:

```JSX
import { NavLink } from "react-router-dom";

class PageTemplate extends React.PureComponent {
  render() {
    return (
      <PageCont>
        <Header>
          <h1>Full React App With 5 Libraries</h1>
        </Header>
        <Main>
          <Sidebar>
            <NavLink exact to="/">
              Intro
            </NavLink>
            <NavLink to="/styledcomponents">
              Styled Components
            </NavLink>
            <NavLink to="/reactrouter">React Router</NavLink>
            <NavLink to="/redux">Redux</NavLink>
            <NavLink to="/sagaaxios">
              Redux Saga and Axios
            </NavLink>
          </Sidebar>
          <Content>{this.props.children}</Content>
        </Main>
      </PageCont>
    );
  }
}
```

Docs: https://reacttraining.com/react-router/

Source Code: https://github.com/ReactTraining/react-router

## 3. Redux

Redux is more complicated. It solves the problem of

- sure you have some experience with react component state
- but it gets wiped when you change page... how can we stop this?
- extract state to above the router... awkward
- use redux! - see the problem it is fixing
- tour/docs/resources

## 4. Redux Saga / Axios

- now you want to save some stuff on the backend
- how can you use the same redux framework to do this?
- request, success, failure pattern and Redux Saga -> Axios HTTP client service

## 5. Quick tour of the backend

- node
- express
- cors
