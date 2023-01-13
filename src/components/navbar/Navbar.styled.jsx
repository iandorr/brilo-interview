import styled, { useTheme, css } from "styled-components";

const NavbarStyled = styled.nav`
  background-color: ${() => useTheme().colors.clAccent};

  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  /* ${props => props.isVisible === false && css`
    transform: translateY(-100%);
    transition: transform 0.3s ease-out;
  `}
  ${props => props.isVisible === true && css`
    transform: translateY(0);
    transition: transform 0.3s ease-in;
  `} */
`

const NavbarContainer = styled.div`

  width: 100vw;

  background-color: ${() => useTheme().colors.clAccent};

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  max-width: 80rem;
  margin: 0 auto;
  padding-inline: 1rem;

  @media(min-width: ${() => useTheme().breakpoints.mobile}) {
    padding-inline: 2rem;
  }

  @media(max-width: ${() => useTheme().breakpoints.mobile}) {
    transition: height 1s ease-out;
    position: initial;

    ${ ({ isOpen }) => !isOpen && css`
      height: 3.4rem;
      transition: all .1s;
    `}

    ${ ({ isOpen }) => isOpen && css`
      height: 100vh;
    `}
  }
`

const NavLinkContainer = styled.ul`

  list-style-type: none;
  text-decoration: none;

  @media(max-width: ${() => useTheme().breakpoints.mobile}) {
    opacity: 0;
    transition: opacity .5s ease-out .5s;

    ${ ({ isOpen }) => !isOpen && css`
      opacity: 0;
      transition: all 0s;
    `}

    ${ ({ isOpen }) => isOpen && css`
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      position: fixed;

      gap: 2rem;
      padding: 1rem;
      z-index: 50;
      height: 100vh;
      inset: 0;

      background-color: transparent; 
      
      opacity: 1;
    `}
  }

  @media(min-width: ${() => useTheme().breakpoints.mobile}) {
    display: flex;
    gap: .5rem;

    position: initial;

    justify-content: flex-end;
    padding: 1rem 0;
  }
`

const MobileNavButton = styled.button`

@media(min-width: ${() => useTheme().breakpoints.mobile}) {
  display: none;
}

z-index: 100;

font-size: 40px;
color: ${() => useTheme().colors.clTextLight};
line-height: 1;

background-color: transparent;

border: none;
padding: 0;
padding-bottom: 3px;
margin: .5rem;

overflow: hidden;

transition: scale .3s ease-out;

&:hover {
  scale: 1.1;
}
`

export {NavbarStyled, NavbarContainer, NavLinkContainer, MobileNavButton}