import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PageCont = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
  color: #17252a;
`;

const Header = styled.div`
  padding: 16px;
  width: 100%;
  border-bottom: thin solid #17252a;
  background: #feffff;
  h1 {
    font-size: 24px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
`;

const Sidebar = styled.div`
  height: 100%;
  min-width: 250px;
  background: #3aafa9;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

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

const Content = styled.div`
  background: #def2f1;
  flex: 1;
  padding: 16px;
`;

class PageTemplate extends React.PureComponent {
  render() {
    return (
      <PageCont>
        <Header>
          <h1>Full React App With 5 Libraries</h1>
        </Header>
        <Main>
          <Sidebar>
            <SidebarNavLink exact to="/">
              Intro
            </SidebarNavLink>
            <SidebarNavLink to="/styledcomponents">
              Styled Components
            </SidebarNavLink>
            <SidebarNavLink to="/reactrouter">React Router</SidebarNavLink>
            <SidebarNavLink to="/redux">Redux</SidebarNavLink>
            <SidebarNavLink to="/sagaaxios">
              Redux Saga and Axios
            </SidebarNavLink>
          </Sidebar>
          <Content>{this.props.children}</Content>
        </Main>
      </PageCont>
    );
  }
}

export default PageTemplate;
