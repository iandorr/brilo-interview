import styled, { useTheme } from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;

  background-color: ${() => useTheme().colors.clAccent};
  color: ${() => useTheme().colors.clText};

  ul {
    list-style-type: none;
    text-decoration: none;

    display: flex;
    justify-content: flex-end;
    gap: .5rem;
  }

  li {
    position: relative;

    padding: 0 1rem;
    text-transform: uppercase;
    letter-spacing: .05rem;

    opacity: .7;

    transition: opacity .3s ease-out;

    font-weight: 100;

    &::after {
      position: absolute;
      content: '';

      height: 2px;

      left: 0;
      right: 0;
      bottom: -4px;
      
      width: 40%;
      margin: 0 auto;
      background-color: ${() => useTheme().colors.clText};

      opacity: 0;
      transition: opacity .3s ease-out, width .5s ease-out;
    }

    &:hover {
      color: ${() => useTheme().colors.clText};
      cursor: pointer;
      opacity: 1;

      &::after {
        width: 80%;
        opacity: 1;
      }
    }

  }

`

export default NavbarStyled