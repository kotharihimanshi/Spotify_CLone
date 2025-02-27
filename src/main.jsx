import './index.css'
import App from './App.jsx'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext'
import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeProvider>
  <PlayerContextProvider>
      <App />
  </PlayerContextProvider>
  </ThemeProvider>
  </BrowserRouter>
)
