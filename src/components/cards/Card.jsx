import CardStyled from './Card.styled'

const Card = ({title, subtitle, img}) => {
  return (
    <CardStyled>
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </CardStyled>
  )
}

export default Card