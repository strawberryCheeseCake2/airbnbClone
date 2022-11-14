import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import ProfileDropdown from "./profile-dropdown/ProfileDropdown";

import { TopHeaderContainer, AirbnbLogo } from "./top-header.styles";

const TopHeader = ({compOption}) => {
  const SearchBar = compOption;

  return (
    <>
      <TopHeaderContainer>
        <Link to="/">
          <AirbnbLogo width="153px" height="48px" viewBox="0 0 102 32"/>
        </Link>
        {compOption && <SearchBar />}
        <ProfileDropdown />
      </TopHeaderContainer>
    </>
  );
};

TopHeader.defaultProps = {
  compOption: false,
}

export default TopHeader;
