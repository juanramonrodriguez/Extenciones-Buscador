
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/dark-mode/theme-context.jsx'




createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
   </ThemeProvider>
  
 
)
