import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleClick, handleMouseOut, handleMouseOver } from "../navBarSlice";

import {
  NavBarIconImg,
  NavBarIconContainer,
  NavBarIconName,
} from "./nav-bar-icon.styles";

const NavBarIcon = (props) => {
  const { icon } = props;
  const { id, src, title, category } = icon;

  const dispatch = useDispatch();
  const icons = useSelector((state) => state.navBar.icons);

  const urlId = useParams().id - "0";

  useEffect(() => {
    dispatch(handleClick(urlId));
  });

  return (
    <>
      <Link
        to={`category=${id}/`}
        style={{ textDecoration: "none", padding: 0, marginRight: "3rem" }}
      >
        <NavBarIconContainer
          onClick={() => dispatch(handleClick(id))}
          onMouseOver={() => dispatch(handleMouseOver(id))}
          onMouseOut={() => dispatch(handleMouseOut(id))}
          style={{
            opacity: icons[id].isClicked ? 1 : icons[id].isHovering ? 1 : 0.5,
            borderBottom: `${
              icons[id].isClicked ? 3.5 : icons[id].isHovering ? 3.5 : 0
            }px solid ${icons[id].isClicked ? "black" : "#EBECF0"}`,
          }}
        >
          <NavBarIconImg src={src} alt={`${title}} placeholder`} />
          <NavBarIconName>{title}</NavBarIconName>
        </NavBarIconContainer>
      </Link>
    </>
  );
};

export default NavBarIcon;
