import styled, {useTheme} from "styled-components";

const FooterStyled = styled.div`
  background-color: ${() => useTheme().colors.clBg};
  color: ${() => useTheme().colors.clText };
`

export default FooterStyled