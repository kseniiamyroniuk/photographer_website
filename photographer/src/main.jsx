import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import MainPage from './pages/MainPage'
import LogInPage from './pages/LogInPage'
import PortfolioPage from './pages/PortfolioPage'
import SignUpPage from './pages/SignUpPage'
import AboutMePage from './pages/AboutMePage'
import BookingPage from './pages/BookingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage />
    <PortfolioPage />
    <AboutMePage />
    <BookingPage />
    <SignUpPage />
    <LogInPage />
  </StrictMode>,
)
