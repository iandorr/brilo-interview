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

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media(min-width: ${() => useTheme().breakpoints.mobile}) {
    padding-inline: 2rem;
    flex-direction: row;
    gap: 0;
  }
  
  
  justify-content: space-between;
  align-items: center;
`

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  gap: 1rem;

  & p {
    text-align: center;
  }

  @media(min-width: ${() => useTheme().breakpoints.mobile}) {
    max-width: 60%;
    padding-right: 2rem;
    align-items: flex-start;

    & p {
      text-align: left;
    }
  }

  @media(min-width: ${() => useTheme().breakpoints.tablet}) {
    gap: 3rem;
    padding-right: 8rem;
  }

  margin: auto 0;

  & a {
    width: fit-content;
  }
`

const HeroTitle = styled.h1`
  font-size: ${() => useTheme().fontSize.header };
  font-weight: ${() => useTheme().fntWeight.thinest };
  text-transform: uppercase;
  text-align: center;

  @media(min-width: ${() => useTheme().breakpoints.mobile}) {
    text-align: left;
  }
`

const HeroRight = styled.div`
  img {
    max-height: 500px;
  }
`



export {HeroStyled, HeroLeft, HeroRight, HeroTitle, HeroContainer}