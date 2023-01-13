import styled, { useTheme } from "styled-components";

const NavbarStyled = styled.nav`
  background-color: ${() => useTheme().colors.clAccent};
`

const NavbarContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding-inline: 1rem;

  @media(min-width: ${() => useTheme().breakpoints.mobile}) {
    padding-inline: 2rem;
  }
`

const NavLinkContainer = styled.ul`
  list-style-type: none;
  text-decoration: none;

  display: flex;
  justify-content: flex-end;

  gap: .5rem;
  padding: 1rem 0;
`

export {NavbarStyled, NavbarContainer, NavLinkContainer}