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
  

  return (
    <NavbarStyled>
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
                    console.log(isMobile)
                  }}
                />
              )
            })
          }
        </NavLinkContainer>
        <MobileNavButton
          onClick={ () => {
            setIsMobile( (currentValue) => !currentValue)
            console.log(isMobile)
          }}
        >
          {isMobile ? <>&#10005;</> : <>&#8801;</>} 
        </MobileNavButton>
      </NavbarContainer>
    </NavbarStyled>
  )
}

export default Navbar