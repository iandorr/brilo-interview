import HeroStyled from './styled/Hero.styled'
import Container from './Container'

const Hero = () => {
  return (
    <HeroStyled>
      <Container display='flex'>
        <HeroLeft />
        <HeroRight />
      </Container>
    </HeroStyled>
  )
}

const HeroLeft = () => {
  return (
    <div>
      <h1>Jack Jackson</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi veniam doloribus commodi voluptates, cumque veritatis laudantium eius unde harum mollitia.</p>
      {/* <Button></Button> */}
    </div>
  )
}

const HeroRight = () => {
  return (
    <div>
      <img src="/src/assets/img/hero-image.png" alt="" />
    </div>
  )
}

export default Hero