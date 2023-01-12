import styled, { useTheme } from 'styled-components';

const HeroStyled = styled.div`
  background-color: ${() => useTheme().colors.clBg};
  color: ${() => useTheme().colors.clText };

  padding-top: 2rem;

  @media(min-width: ${() => useTheme().breakpoints.tablet}) {
    padding-top: 10rem;
  }
`

const HeroContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding-inline: 1rem;

  @media(min-width: ${() => useTheme().breakpoints.mobile}) {
    padding-inline: 2rem;
  }
  
  display: flex;
  justify-content: space-between;
`

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding-right: 10rem;
  margin: auto 0;

  max-width: 60%;

  & a {
    width: fit-content;
  }
`

const HeroTitle = styled.h1`
  font-size: ${() => useTheme().fontSize.header };
  font-weight: ${() => useTheme().fntWeight.thinest };
  text-transform: uppercase;
`

const HeroRight = styled.div`
  img {
    max-height: 500px;
  }
`



export {HeroStyled, HeroLeft, HeroRight, HeroTitle, HeroContainer}