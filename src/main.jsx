import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SkillContext from './Context/SkillContext.jsx'

createRoot(document.getElementById('root')).render(
  <SkillContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SkillContext>

)
