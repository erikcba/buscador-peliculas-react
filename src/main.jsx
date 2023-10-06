import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BuscadorApp } from './components/BuscadorApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <React.StrictMode>
      <BuscadorApp />
    </React.StrictMode>
  </BrowserRouter>,
)
