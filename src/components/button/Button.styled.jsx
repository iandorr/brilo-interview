import styled, { useTheme } from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: .2rem 4rem;

  background-color: ${() => useTheme().colors.clBtnBg };

  color: ${() => useTheme().colors.clTextLight };
  font-size: ${() => useTheme().fontSize.default};
  text-transform: uppercase;

  cursor: pointer;

  transform: scale3d(1, 1, 1);
  transition: .3s ease-out;

  &:hover {
    background-color: ${() => useTheme().colors.clBtnBgAccent };
    transform: scale3d(1.02, 1.02, 1);
  }
`

export default ButtonStyled