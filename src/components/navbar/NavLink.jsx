import NavLinkStyled from './NavLinkStyled'

const NavLink = ({ title, href }) => {
  return (
    <NavLinkStyled>
      <a href={href}>{title}</a>
    </NavLinkStyled>
  )
}

export default NavLink