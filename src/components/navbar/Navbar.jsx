import {
  NavbarStyled,
  NavbarContainer,
  NavLinkContainer,
  MobileNavButton
} from './Navbar.styled'
import NavLink from './NavLink'
import links from '/src/assets/data/links'

import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [lastScroll, setLastScroll] = useState(0);
  const [visible, setVisible] = useState(true);


  const handleScroll = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && visible) {
      setVisible(false);
    } else if (currentScroll <= lastScroll) {

      setVisible(true);
    }
    setLastScroll(currentScroll);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <NavbarStyled isVisible={visible}>
      <NavbarContainer isOpen={isMobile}>
        <NavLinkContainer isOpen={isMobile}>
          {
            links.map( (link) => {
              return (
                <NavLink 
                  key={link.id}
                  title={link.title}
                  href={`#${link.id}`}
                  isOpen={isMobile}
                  onClick={ () => {
                    setIsMobile( (currentValue) => !currentValue)
                  }}
                />
              )
            })
          }
        </NavLinkContainer>
        <MobileNavButton
          onClick={ () => {
            setIsMobile( (currentValue) => !currentValue)
          }}
        >
          {isMobile ? <>&#10005;</> : <>&#8801;</>} 
        </MobileNavButton>
      </NavbarContainer>
    </NavbarStyled>
  )
}

export default Navbar