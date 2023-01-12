import styled from 'styled-components';

const ThemeChangerStyled = styled.div`
  position: fixed;
  left: 1rem;
  bottom: 1rem;

  & button {
    outline: none;
    border: 1px solid black;

    font-size: 14px;
    padding: .2rem 1rem;
  }

  & button:first-child {
    border-radius: 15px 0 0 15px;
  }

  & button:nth-child(2) {
    border-radius: 0 15px 15px 0;
  }
`

export { ThemeChangerStyled }