import React from "react";

import {
  NavBarIconPlaceholderContainer,
  NavBarIconPlaceholderImg,
  NavBarIconPlaceholderName,
} from "./nav-bar-icon-placeholder.styles";

const NavBarIconPlaceholder = () => {
  return (
    <>
      <NavBarIconPlaceholderContainer>
        <NavBarIconPlaceholderImg />
        <NavBarIconPlaceholderName />
      </NavBarIconPlaceholderContainer>
    </>
  );
};

export default NavBarIconPlaceholder;
