import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Load Bootstrap globally so React Bootstrap components receive their styles.
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

// Find the page's root element and let React render the application into it.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provide URL-based navigation to every component inside the app. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)