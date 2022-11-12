import React from 'react';
import { Link } from 'react-router-dom';

import { NavBarIconImg, NavBarIconContainer, NavBarIconName } from './nav-bar-icon.styles';

const NavBarIcon = (props) => {
  const { icon, cursorEventsHandler, cursorEvents } = props;
  const { id, src, name, route } = icon;
  
  const handleOnClick = (eventId) => {
    const newEvent = {id: eventId, isClicked: true, isHovering: false};
    
    const newCursorEvents = cursorEvents.map((cursorEvent) => {
        if (cursorEvent.id === eventId) return newEvent;
        else return {id: cursorEvent.id, isClicked: false, isHovering: false};
    });

    cursorEventsHandler(newCursorEvents);
  };

  const handleOnMouseOver = (eventId) => {
    const newEvent = {id: eventId, isClicked: cursorEvents[eventId - 1].isClicked, isHovering: true};

    const newCursorEvents = cursorEvents.map((cursorEvent) => {
        if (cursorEvent.id === eventId) return newEvent;
        else return cursorEvent;
    });

    cursorEventsHandler(newCursorEvents);
  }

  const handleOnMouseOut = (eventId) => {
    const newEvent = {id: eventId, isClicked: cursorEvents[eventId - 1].isClicked, isHovering: false};

    const newCursorEvents = cursorEvents.map((cursorEvent) => {
        if (cursorEvent.id === eventId) return newEvent;
        else return cursorEvent;
    });

    cursorEventsHandler(newCursorEvents);
  }

  return (
    <>
      <Link to={`category=${route}`} style={{ textDecoration: 'none' }}>
        <NavBarIconContainer
          onClick={() => handleOnClick(id)}
          onMouseOver={() => handleOnMouseOver(id)}
          onMouseOut={() => handleOnMouseOut(id)}
          style={{opacity: cursorEvents[id - 1].isClicked ? 1 :
            cursorEvents[id - 1].isHovering ? 1 : 0.5}}
        >
          <NavBarIconImg src={src} alt={`${name} placeholder`} />
          <NavBarIconName>{name}</NavBarIconName>
        </NavBarIconContainer>
      </Link>
    </>
  )
}

export default NavBarIcon