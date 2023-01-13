import styled, { useTheme, css } from "styled-components";

const NavLinkStyled = styled.li`
  position: relative;

  padding: 0 1rem;
  text-transform: uppercase;
  letter-spacing: .05rem;

  opacity: .8;

  transition: opacity .3s ease-out;

  font-weight: ${() => useTheme().fntWeight.thin};
  
  /* @media(max-width: ${() => useTheme().breakpoints.mobile}) {
    transition: opacity;
    transition-delay: 1000ms;

    ${ ({ isOpen }) => !isOpen && css`
      opacity: 0;
      transition: all .1s;
    `}

    ${ ({ isOpen }) => isOpen && css`
      opacity: 1;
    `}
  } */

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
    /* color: ${() => useTheme().colors.clText}; */
    cursor: pointer;
    opacity: 1;

    &::after {
      width: 80%;
      opacity: 1;
    }
  }

  & a {
    color: ${() => useTheme().colors.clTextLight};
    transition: color .3s ease-out;

    &:hover {
      color: ${() => useTheme().colors.clText};
    }
  }
`

export default NavLinkStyled