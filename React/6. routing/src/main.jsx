import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ThemeContextProvider from './context/ThemeContext.jsx'

import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>,
)
