import styled, { useTheme } from "styled-components";

const CardsStyled = styled.div`
  background-color: ${() => useTheme().colors.clBg};

  padding-top: 2rem;

  @media(min-width: ${() => useTheme().breakpoints.tablet}) {
    padding-top: 10rem;
  }
`

const CardsSectionContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding-inline: 1rem;

  @media(min-width: ${() => useTheme().breakpoints.mobile}) {
    padding-inline: 2rem;
  }

  display: flex;
  flex-direction: column;

  & h2 {
    color: ${() => useTheme().colors.clText};
    font-size: ${() => useTheme().fontSize.large};
    font-weight: ${() => useTheme().fntWeight.thinest};
    text-transform: uppercase;

    padding-block: 2rem;
  }
`

const CardsContainer = styled.div`

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media(min-width: ${() => useTheme().breakpoints.mobile}) {
    flex-direction: row;
    gap: 1rem;
  }

  @media(min-width: ${() => useTheme().breakpoints.tablet}) {
    gap: 3rem;
  }

  & > div {
    flex: 1;
  }
`

export {CardsStyled, CardsSectionContainer, CardsContainer}