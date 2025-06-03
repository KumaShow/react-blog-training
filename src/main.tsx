import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom';

const basename = import.meta.env.BASE_URL;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename={basename}>
      <App />
    </HashRouter>
  </StrictMode>,
)
