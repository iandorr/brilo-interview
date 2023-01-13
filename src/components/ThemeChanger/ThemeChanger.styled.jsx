import styled, { useTheme } from 'styled-components';

const ThemeChangerStyled = styled.div`
  position: fixed;
  left: 1rem;
  bottom: 1rem;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    padding: .5rem;
    border-radius: 100%;

    font-size: 14px;

    border: 1px solid ${() => useTheme().colors.clIconPrimary };
    color: ${() => useTheme().colors.clIconPrimary };
    background-color: ${() => useTheme().colors.clIconBg };

    &:focus {
      outline: none;
    }
  }
`

export { ThemeChangerStyled }