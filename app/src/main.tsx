import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import App from './App.tsx'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <div className="w-screen h-screen p-8 flex items-start justify-center">
        <App />
      </div>
    </HeroUIProvider>
  </StrictMode>,
)