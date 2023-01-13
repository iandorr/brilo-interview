import styled, { useTheme } from 'styled-components';

const ThemeChangerStyled = styled.div`
  position: fixed;
  left: 1rem;
  bottom: 1rem;

  & button {
    outline: none;
    border: 1px solid ${() => useTheme().colors.clText };

    font-size: 14px;
    padding: .2rem 1rem;

    opacity: .8;
    transition: .5s ease-out;

    &:hover {
      opacity: 1;
    }

    color: ${() => useTheme().colors.clAccent };
    background-color: ${() => useTheme().colors.clText };
  }

  & button:first-child {
    border-radius: 15px 0 0 15px;
    margin-right: .05rem;
  }

  & button:nth-child(2) {
    border-radius: 0 15px 15px 0;
  }
`

export { ThemeChangerStyled }