import { React, useEffect, useState } from 'react'

import NavBarIcon from './nav-bar-icon.component';

import { NavBarContainer } from './nav-bar.styles';

import iconArrs from '../../mock/nav-icons.json';

const NavBar = () => {
  const [icons, setIcons] = useState(iconArrs);
  const cursorOnIconArr = icons.map((icon) => {
    return {id: icon.id, isClicked: false, isHovering: false};
  });
  const [cursorEventOnIcons, setCursorEventOnIcons] = useState(cursorOnIconArr);

  const handleIsHovering = (e) => {
    
  };

  return (
    <NavBarContainer>
      {
        icons.map((icon) => {
          return (
            <NavBarIcon 
              key={icon.id}
              icon={icon}
              cursorEventsHandler={setCursorEventOnIcons}
              cursorEvents={cursorEventOnIcons}
              //onMouseOver={() => handleIsHovering(true)}
              //onMouseOut={() => handleIsHovering(false)}
             // style={{opacity : cursorEventOnIcons[icon.id].isClicked ? 1 : 0.5}}
            />
          )
        })
      }
      
    </NavBarContainer>
  )
}

export default NavBar