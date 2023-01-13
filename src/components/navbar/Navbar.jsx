import {
  NavbarStyled,
  NavbarContainer,
  NavLinkContainer,
  MobileNavButton
} from './Navbar.styled'
import NavLink from './NavLink'
import links from '/src/assets/data/links'

import { useState } from 'react'

const Navbar = () => {
  const [mobNavVis, setMobNavVis] = useState(false)

  return (
    <NavbarStyled>
      <NavbarContainer isOpen={mobNavVis}>
        <NavLinkContainer isOpen={mobNavVis}>
          {
            links.map( (link) => {
              return (
                <NavLink 
                  key={link.id}
                  title={link.title}
                  href={`#${link.id}`}
                  isOpen={mobNavVis}
                  onClick={ () => {
                    setMobNavVis( (currentValue) => !currentValue)
                    console.log(mobNavVis)
                  }}
                />
              )
            })
          }
        </NavLinkContainer>
        <MobileNavButton
          onClick={ () => {
            setMobNavVis( (currentValue) => !currentValue)
            console.log(mobNavVis)
          }}
        >
          {mobNavVis ? <>&#10005;</> : <>&#8801;</>} 
        </MobileNavButton>
      </NavbarContainer>
    </NavbarStyled>
  )
}

export default Navbar