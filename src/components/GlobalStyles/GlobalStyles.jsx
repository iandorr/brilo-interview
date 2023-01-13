import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }

  :root {
    /* position: relative; */
    scroll-behavior: smooth;
  }

  /* CSS Reset */

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin and padding */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd,
  ul {
    margin: 0;
    padding: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Remove underlines on links */
  a {
    text-decoration: none;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove default styling for buttons */
  button {
    z-index: 10;
    border: none;
    outline: none;

    cursor: pointer;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  // CSS Reset - end
`

export default GlobalStyles