import React from 'react';
import { Outlet, Link } from "react-router-dom";
import TopHeader from '../../components/top-header/top-header.component';

const Header = () => {
  return (
    <div>
      <TopHeader />
      <h1>Navigation</h1>
      <p>
        <Link to={'category=beach/'}>beach</Link>
      </p>
      <p>
        <Link to={'category=amazing-views/'}>amazingviews</Link>
      </p>
      <Outlet />
    </div>
  )
}

export default Header