import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/*' element={<App/>}/>
      </Routes>
      <ToastContainer/>
      </AuthProvider>
    </Router>
  </StrictMode>,
)
