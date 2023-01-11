import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 60rem;
  max-width: 80rem;
  margin: 0 auto;

  display: ${props => props.display || 'block'};
`

export default ContainerStyled