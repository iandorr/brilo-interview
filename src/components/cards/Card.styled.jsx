import styled, { useTheme } from "styled-components";

const CardStyled = styled.div`

  display: flex;
  flex-direction: column;
  
  & img {
    /* width: 100%; */
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    height: 100%;

    padding: 1rem;

    background-color: ${() => useTheme().colors.clBtnBg};
    color: ${() => useTheme().colors.clTextLight};

    & h3 {
      font-size: ${() => useTheme().fontSize.cardTitle};
      font-weight: ${() => useTheme().fntWeight.bold};
      text-transform: uppercase;
    }
  }
`

export default CardStyled