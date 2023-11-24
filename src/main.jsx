import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import AuthProvider from './providers/AuthProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-7xl mx-auto font-poppins'>
      <AuthProvider>
        <App />
      </AuthProvider>
    </div>
  </React.StrictMode>

)
