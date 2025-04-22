import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #1a73e8;
    --secondary-color: #4285f4;
    --text-color: #333333;
    --background-color: #f8f9fa;
    --gray-light: #f5f5f5;
    --gray-medium: #e0e0e0;
    --card-background: #ffffff;
    --max-width: 1200px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    min-height: 100vh;
    position: relative;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--secondary-color);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 500;
    color: var(--text-color);
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`; 