import styled, { useTheme } from 'styled-components';

const HeroStyled = styled.div`
  background-color: ${() => useTheme().colors.clBg};
  color: ${() => useTheme().colors.clText };
`

export default HeroStyled