import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import SearchBar from "./search-bar/search-bar.component";
import ProfileDropdown from "./profile-dropdown/ProfileDropdown";

import { TopHeaderContainer, AirbnbLogo } from "./top-header.styles";

const TopHeader = () => {
  return (
    <>
      <TopHeaderContainer>
        <Link to="/">
          <AirbnbLogo width="153px" height="48px" viewBox="0 0 102 32"/>
        </Link>
        <SearchBar />
        <ProfileDropdown />
      </TopHeaderContainer>
    </>
  );
};

export default TopHeader;
