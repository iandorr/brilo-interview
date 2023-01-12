import styled, { useTheme } from "styled-components";

const ContainerStyled = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding-inline: 1rem;

  @media(min-width: ${() => useTheme().breakpoints.mobile}) {
    padding-inline: 2rem;
  }

  display: ${props => props.display || 'block'};
`

export default ContainerStyled