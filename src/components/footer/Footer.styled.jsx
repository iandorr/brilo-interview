import styled, {useTheme} from "styled-components";

const FooterStyled = styled.div`
  background-color: ${() => useTheme().colors.clBg};
  color: ${() => useTheme().colors.clText };

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  padding-top: 2rem;

  @media(min-width: ${() => useTheme().breakpoints.tablet}) {
    padding-top: 10rem;
  }
`

const FooterContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding-inline: 1rem;

  @media(min-width: ${() => useTheme().breakpoints.mobile}) {
    padding-inline: 2rem;
  }

  & small {
    font-size: ${() => useTheme().fontSize.small };
  }
`

export { FooterStyled, FooterContainer }