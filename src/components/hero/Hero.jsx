import {HeroStyled, HeroLeft, HeroRight, HeroTitle, HeroContainer} from './Hero.styled'
import Button from '../button/Button'

import heroImage from '/src/assets/img/hero-image.png'

const Hero = () => {
  return (
    <HeroStyled>
      <HeroContainer>
        <HeroLeft>
          <HeroTitle>Jack Jackson</HeroTitle>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, dolore velit ex autem quae dicta laudantium hic dolor commodi alias asperiores illo, minus quis sapiente? Quasi nulla consectetur qui veniam omnis quaerat error odit quia praesentium dolores? Facere, perspiciatis praesentium.</p>
          <Button btnText='Learn More' btnLink='#'/>
        </HeroLeft>
        <HeroRight>
          <img src={heroImage} alt="" />
        </HeroRight>
      </HeroContainer>
    </HeroStyled>
  )
}

export default Hero