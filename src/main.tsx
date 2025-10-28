import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <div className='min-h-screen bg-[#212121] text-white'>
      <App />
    </div>,
  </BrowserRouter>
  
)
