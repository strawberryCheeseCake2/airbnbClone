import React from "react";
import { Link } from "react-router-dom";
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

  return (
    <>
      <Link to={`category=${id}/`} style={{ textDecoration: "none", padding: 0, }}>
        <NavBarIconContainer
          onClick={() => dispatch(handleClick(id))}
          onMouseOver={() => dispatch(handleMouseOver(id))}
          onMouseOut={() => dispatch(handleMouseOut(id))}
          style={{
            opacity: icons[id].isClicked ? 1 : icons[id].isHovering ? 1 : 0.5,
            borderBottom: `${
              icons[id].isClicked
                ? 3.5
                : icons[id].isHovering
                ? 3.5
                : 0
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

/*
Hooks
  // const handleOnClick = (eventId) => {
  //   const newEvent = { id: eventId, isClicked: true, isHovering: false };

  //   const newCursorEvents = cursorEvents.map((cursorEvent) => {
  //     if (cursorEvent.id === eventId) return newEvent;
  //     else return { id: cursorEvent.id, isClicked: false, isHovering: false };
  //   });
  //   cursorEventsHandler(newCursorEvents);
  // };

   // const handleOnMouseOver = (eventId) => {
  //   const newEvent = {
  //     id: eventId,
  //     isClicked: cursorEvents[eventId - 1].isClicked,
  //     isHovering: true,
  //   };

  //   const newCursorEvents = cursorEvents.map((cursorEvent) => {
  //     if (cursorEvent.id === eventId) return newEvent;
  //     else return cursorEvent;
  //   });

  //   cursorEventsHandler(newCursorEvents);
  // };

  // const handleOnMouseOut = (eventId) => {
  //   const newEvent = {
  //     id: eventId,
  //     isClicked: cursorEvents[eventId - 1].isClicked,
  //     isHovering: false,
  //   };

  //   const newCursorEvents = cursorEvents.map((cursorEvent) => {
  //     if (cursorEvent.id === eventId) return newEvent;
  //     else return cursorEvent;
  //   });

  //   cursorEventsHandler(newCursorEvents);
  // };

*/
