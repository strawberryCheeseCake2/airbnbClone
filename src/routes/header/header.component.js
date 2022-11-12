import React from 'react';
import { Outlet, Link } from "react-router-dom";

import TopHeader from '../../components/top-header/top-header.component';
import NavBar from '../../components/nav-bar/nav-bar.component';

const Header = () => {
  return (
    <div>
      <TopHeader />
      <NavBar />
      
      <Outlet />
    </div>
  )
}

export default Header