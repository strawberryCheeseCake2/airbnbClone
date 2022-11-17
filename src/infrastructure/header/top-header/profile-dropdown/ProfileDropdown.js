import React from 'react'
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  return (
    <>
    {/* ProfileDropdown */}
      <Link to="/wishlist/" style={{textDecoration: "none", color: "black"}}>
        <span style={{fontSize: "1.2rem",}}>Wishlists</span>
      </Link>
    </>
  )
}

export default ProfileDropdown