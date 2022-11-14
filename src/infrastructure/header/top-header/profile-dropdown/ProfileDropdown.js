import React from 'react'
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  return (
    <>
    {/* ProfileDropdown */}
      <Link to="wishlist/" style={{textDecoration: "none", color: "black"}}>
        Wishlist
      </Link>
    </>
  )
}

export default ProfileDropdown