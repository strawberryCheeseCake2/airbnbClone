import React from 'react';
import { Outlet } from "react-router-dom";

import TopHeader from './top-header/top-header.component';
import NavBar from './nav-bar/nav-bar.component';
import SearchBar from './top-header/search-bar/search-bar.component';

import { HeaderContainer, StikcyContainer } from './header.styles';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <StikcyContainer>
          <TopHeader compOption={SearchBar}/>
          <NavBar />
        </StikcyContainer>
        <Outlet style={{flex: 1}}/>
      </HeaderContainer>
    </>
  )
}

export default Header