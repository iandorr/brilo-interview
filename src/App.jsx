// Themes
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './components/themes/themes'

// Styles
import GlobalStyles from './components/GlobalStyles/GlobalStyles'

// Components
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Cards from './components/cards/Cards'
import Footer from './components/footer/Footer'
import ThemeChanger from './components/ThemeChanger/ThemeChanger'

// React
import { useState } from 'react'

// Main
function App() {
  const [currentTheme, setCurrentTheme] = useState(darkTheme)

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navbar />
      <Hero id='home'/>
      <Cards id='my-work'/>
      <Footer />
      <ThemeChanger setCurrentTheme={setCurrentTheme} currentTheme={currentTheme}/>
    </ThemeProvider>
  )
}

export default App
