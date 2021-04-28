import React from 'react';
import styled from 'styled-components/macro';

import Footer from './Footer';
import NavBar from './NavBar';
import SideBar from './SideBar';

const Container = styled.div``;

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => (
  <Container className="container-scroller">
    <NavBar />
    <Container className="container-fluid page-body-wrapper">
      <SideBar />
      <Container className="main-panel">
        {children}
        <Footer />
      </Container>
    </Container>
  </Container>
);

export default MainLayout;
