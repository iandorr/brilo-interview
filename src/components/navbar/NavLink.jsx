import NavLinkStyled from './NavLinkStyled'

const NavLink = ({ title, href, onClick, isOpen }) => {
  return (
    <NavLinkStyled onClick={onClick} isOpen={isOpen}>
      <a href={href}>{title}</a>
    </NavLinkStyled>
  )
}

export default NavLink