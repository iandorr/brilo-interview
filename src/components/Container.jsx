import ContainerStyled from "./styled/Container.styled"

const Container = ({children, display}) => {
  return (
    <ContainerStyled display={display}>{children}</ContainerStyled>
  )
}

export default Container