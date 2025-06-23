import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import AddRestaurant from './pages/AddRestaurant.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddRestaurant />
  </StrictMode>,
)
