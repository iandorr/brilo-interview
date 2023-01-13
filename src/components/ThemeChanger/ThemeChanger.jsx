import { ThemeChangerStyled } from './ThemeChanger.styled.jsx'
import { darkTheme, lightTheme } from '/src/components/themes/themes'
import { FaSun, FaRegSun, FaRegMoon } from 'react-icons/fa';

const ThemeChanger = ({ setCurrentTheme, currentTheme }) => {

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeChangerStyled>
      {/* <button onClick={() => setCurrentTheme(lightTheme)}>
        <FaSun />
      </button>
      <button onClick={() => setCurrentTheme(darkTheme)}>
        <FaRegSun />
      </button> */}

      <button onClick={toggleTheme}>
        {currentTheme === lightTheme ? <FaSun /> : <FaRegMoon />}
      </button>
    </ThemeChangerStyled>
  )
}

export default ThemeChanger