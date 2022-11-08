import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <p>
        <Link to={'category/beach/'}>beach</Link>
      </p>
      <p>
        <Link to={'category/amazing-views/'}>amazingviews</Link>
      </p>
      <Outlet />
    </div>
  )
}

export default Navigation