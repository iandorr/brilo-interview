import styled, {useTheme} from "styled-components";

const FooterStyled = styled.div`
  background-color: ${() => useTheme().colors.clBg};
  color: ${() => useTheme().colors.clText };

  & small {
    font-size: ${() => useTheme().fontSize.small };
  }

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  padding-top: 2rem;

  @media(min-width: ${() => useTheme().breakpoints.tablet}) {
    padding-top: 10rem;
  }
`

export default FooterStyled