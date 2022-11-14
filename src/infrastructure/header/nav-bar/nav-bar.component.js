import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import NavBarIcon from './nav-bar-icon/nav-bar-icon.component';

import { NavBarContainer } from './nav-bar.styles';

import { fetchNavIcons } from './navBarSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const icons = useSelector((state) => state.navBar.icons);
  const navBarIconStatus = useSelector((state) => state.navBar.status)
  const error = useSelector((state) => state.navBar.error)
  
  useEffect(() => {
    if (navBarIconStatus === 'idle') {
      dispatch(fetchNavIcons())
    }
  }, [navBarIconStatus, dispatch]);
  // It will fetch twice due to React.StricMode

  let content;
 
  if (navBarIconStatus === 'loading') {
    content = <h1>Loading</h1>
  } else if (navBarIconStatus === 'succeeded') {
    content = icons.map((icon) => (
        <NavBarIcon 
          key={icon.id}
          icon={icon}
        />
      )
    )
  } else if (navBarIconStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <NavBarContainer>
      {content}
    </NavBarContainer>
  )
}

export default NavBar