// Themes
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './themes/themes'

// Styles
import GlobalStyles from './components/styled/GlobalStyles'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Footer from './components/Footer'
import ThemeChanger from './components/ThemeChanger'

// React
import { useState } from 'react'

// Main
function App() {
  const [currentTheme, setCurrentTheme] = useState(darkTheme)

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
      <ThemeChanger setCurrentTheme={setCurrentTheme}/>
    </ThemeProvider>
  )
}

export default App
