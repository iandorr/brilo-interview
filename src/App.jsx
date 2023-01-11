// Themes
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './themes/themes'

// Styles
import GlobalStyles from './components/styled/GlobalStyles'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Footer from './components/Footer'

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

      <Footer />

      <button onClick={() => setCurrentTheme(lightTheme)}>Switch to light theme</button>
      <button onClick={() => setCurrentTheme(darkTheme)}>Switch to dark theme</button>
    </ThemeProvider>
  )
}

export default App
