import { ThemeChangerStyled } from './ThemeChanger.styled.jsx'
import { darkTheme, lightTheme } from '/src/components/themes/themes'

const ThemeChanger = ({ setCurrentTheme }) => {
  return (
    <ThemeChangerStyled>
      <button onClick={() => setCurrentTheme(lightTheme)}>Light theme</button>
      <button onClick={() => setCurrentTheme(darkTheme)}>Dark theme</button>
    </ThemeChangerStyled>
  )
}

export default ThemeChanger