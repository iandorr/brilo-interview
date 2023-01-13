// import CardsContainer from './Container'
import { CardsStyled, CardsSectionContainer, CardsContainer } from './Cards.styled'
import Card from './Card'
import card1 from '/src/assets/img/card-project.png'
import card2 from '/src/assets/img/card-rebrand.png'
import card3 from '/src/assets/img/card-work.png'

const Cards = () => {
  return (
    <CardsStyled>
      <CardsSectionContainer>
        <h2>What I did</h2>
        <CardsContainer>
          <Card title='Epic project' subtitle='Awesome project I did in 2018. It was big experience for me' img={card1} />
          <Card title='Another work I did' subtitle='Awesome project I did in 2018. It was big experience for me' img={card2} />
          <Card title='Rebrand of this company' subtitle='Awesome project I did in 2018. It was big experience for me' img={card3} />
        </CardsContainer>
      </CardsSectionContainer>
    </CardsStyled>
  )
}

export default Cards