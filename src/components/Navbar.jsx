import NavbarStyled from './styled/Navbar.styled'
import Container from './Container'

const Navbar = () => {
  return (
    <NavbarStyled>
      <Container>
        <ul>
          <NavLink title='Home'/>
          <NavLink title='About me'/>
          <NavLink title='My work'/>
        </ul>
      </Container>
    </NavbarStyled>
  )
}

const NavLink = ({ title }) => {
  return (
    <li>{title}</li>
  )
}

export default Navbar