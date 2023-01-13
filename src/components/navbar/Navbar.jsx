import { NavbarStyled, NavbarContainer, NavLinkContainer} from './Navbar.styled'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <NavbarStyled className='NavbarStyled'>
      <NavbarContainer className='NavbarContainer'>
        <NavLinkContainer className='NavLinkContainer'>
          <NavLink className='NavLinkStyled' title='Home'/>
          <NavLink className='NavLinkStyled' title='About me'/>
          <NavLink className='NavLinkStyled' title='My work'/>
        </NavLinkContainer>
      </NavbarContainer>
    </NavbarStyled>
  )
}

export default Navbar