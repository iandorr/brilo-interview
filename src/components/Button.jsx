import ButtonStyled from "./styled/Button.styled"

const Button = ({btnText, btnLink}) => {
  return (
      <a href={btnLink}>
        <ButtonStyled>{btnText}</ButtonStyled>
      </a>
  )
}

export default Button