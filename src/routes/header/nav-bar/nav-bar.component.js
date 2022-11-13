import { React, useEffect, useState } from 'react'

import NavBarIcon from './nav-bar-icon/nav-bar-icon.component';

import { NavBarContainer } from './nav-bar.styles';

import iconArrs from '../../../mock/nav-icons.json';

const NavBar = () => {
  const [icons, setIcons] = useState(iconArrs);

  return (
    <NavBarContainer>
      {
        icons.map((icon) => {
          return (
            <NavBarIcon 
              key={icon.id}
              icon={icon}
            />
          )
        })
      }
      
    </NavBarContainer>
  )
}

export default NavBar