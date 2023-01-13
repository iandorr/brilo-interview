import { NavbarStyled, NavbarContainer, NavLinkContainer} from './Navbar.styled'
import NavLink from './NavLink'
import links from '/src/assets/data/links'

const Navbar = () => {

  return (
    <NavbarStyled>
      <NavbarContainer>
        <NavLinkContainer>
          {
            links.map( (link) => {
              return (
                <NavLink key={link.id} title={link.title} href={`#${link.id}`} />
              )
            })
          }
        </NavLinkContainer>
      </NavbarContainer>
    </NavbarStyled>
  )
}

export default Navbar